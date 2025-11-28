import { NextRequest, NextResponse } from "next/server";
import {prisma} from "@/lib/prisma"; // prisma client

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const email = formData.get("email")?.toString();
    const lowonganId = formData.get("lowonganId")?.toString();
    const coverLetter = formData.get("coverLetter")?.toString() || null;

    if (!email || !lowonganId) {
      return NextResponse.json(
        { message: "Email dan lowonganId wajib diisi" },
        { status: 400 }
      );
    }

    // Cari biodata user berdasarkan email
    const biodata = await prisma.biodata.findFirst({
      where: { email },
    });

    // Simpan record SendLowongan
    const sendLowongan = await prisma.sendLowongan.create({
      data: {
        email,
        coverLetter,
        lowonganId,
        biodataId: biodata?.id || null, // opsional
      },
    });

    // TODO: simpan file ke storage jika mau

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
