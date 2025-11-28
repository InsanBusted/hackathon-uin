import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // prisma client
import { ethers } from "ethers";

export const GET = async (req: NextRequest) => {
  try {
    const url = new URL(req.url);

    const lowonganId = url.searchParams.get("lowonganId");
    const companyId = url.searchParams.get("companyId");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const whereClause: any = {};

    // Filter berdasarkan lowongan tertentu
    if (lowonganId) {
      whereClause.lowonganId = lowonganId;
    }

    // Filter semua pelamar untuk lowongan milik company login
    if (companyId) {
      whereClause.lowongan = {
        userId: companyId, // ambil lowongan yang dibuat company login
      };
    }

    const sendLowongans = await prisma.sendLowongan.findMany({
      where: whereClause,
      include: {
        biodata: true,
        lowongan: true,
        status: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      message: "Berhasil mengambil data lamaran",
      data: sendLowongans,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Terjadi kesalahan saat mengambil data lamaran" },
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();

    // Ambil field dasar
    const email = formData.get("email")?.toString();
    const lowonganId = formData.get("lowonganId")?.toString();
    const coverLetter = formData.get("coverLetter")?.toString() || null;
    const biodataIdFromForm = formData.get("biodataId")?.toString();
    const applyType = formData.get("applyType")?.toString(); // "deadline" | "milestone"

    if (!email || !lowonganId) {
      return NextResponse.json(
        { message: "Email dan lowonganId wajib diisi" },
        { status: 400 }
      );
    }

    // Cari biodata user berdasarkan email
    const biodata = biodataIdFromForm
      ? { id: biodataIdFromForm }
      : await prisma.biodata.findFirst({ where: { email } });

    // ===============================
    // HANDLE APPLY TYPE DEADLINE
    // ===============================
    let priceWei: bigint | null = null;
    let endDateObj: Date | null = null;

    if (applyType === "deadline") {
      const price = formData.get("price")?.toString();
      const endDate = formData.get("endDate")?.toString();

      if (!price || !endDate) {
        return NextResponse.json(
          { message: "Price dan EndDate wajib diisi untuk deadline" },
          { status: 400 }
        );
      }

      // Convert ETH → wei
      try {
        priceWei = ethers.parseEther(price);
      } catch (err) {
        return NextResponse.json(
          { message: "Format price ETH tidak valid" },
          { status: 400 }
        );
      }

      endDateObj = new Date(endDate);
    }

    // ===============================
    // HANDLE APPLY TYPE MILESTONE
    // ===============================
    let milestonesData: {
      stage: string;
      amount: bigint;
      deadline: Date;
    }[] = [];

    if (applyType === "milestone") {
      const milestonesJson = formData.get("milestones")?.toString();
      if (!milestonesJson) {
        return NextResponse.json(
          { message: "Milestones wajib diisi untuk applyType milestone" },
          { status: 400 }
        );
      }

      try {
        const parsed = JSON.parse(milestonesJson);
        if (!Array.isArray(parsed) || parsed.length === 0) {
          throw new Error();
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        milestonesData = parsed.map((m: any) => ({
          stage: m.stage,
          amount: ethers.parseEther(m.amount.toString()),
          deadline: new Date(m.deadline),
        }));
      } catch (err) {
        return NextResponse.json(
          { message: "Format milestones salah atau kosong" },
          { status: 400 }
        );
      }
    }

    // ===============================
    // CREATE SENDLOWONGAN
    // ===============================
    const sendLowongan = await prisma.sendLowongan.create({
      data: {
        email,
        coverLetter,
        lowonganId,
        biodataId: biodata?.id || null,
        price: priceWei ? Number(priceWei.toString()) : null, // prisma Float, simpan wei sebagai number
        endDate: endDateObj || null,
        milestones:
          milestonesData.length > 0
            ? {
                create: milestonesData.map((m) => ({
                  stage: m.stage,
                  amount: Number(m.amount.toString()), // prisma Float
                  deadline: m.deadline,
                })),
              }
            : undefined,
      },
    });

    return NextResponse.json({
      message: "Lamaran berhasil dikirim",
      data: sendLowongan,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Terjadi kesalahan saat mengirim lamaran" },
      { status: 500 }
    );
  }
};
