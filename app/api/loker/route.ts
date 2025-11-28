import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { createLowonganSchema } from "@/schemas/lowongan";

const prisma = new PrismaClient();



export async function GET() {
  try {
    const data = await prisma.lowongan.findMany({
      include: {
        bidang: true,
        user: {
          select: { id: true, email: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("GET LOWONGAN ERROR", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // jika body array
    if (Array.isArray(body)) {
      const results = [];

      for (const item of body) {
        const parsed = createLowonganSchema.safeParse(item);
        if (!parsed.success) {
          console.error("Invalid item skipped:", parsed.error.flatten());
          continue; // skip item invalid
        }

        const data = parsed.data;
        const slug =
          data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") +
          "-" +
          Math.random().toString(36).substring(2, 7);

        const created = await prisma.lowongan.create({
          data: {
            userId: data.userId,
            slug,
            title: data.title,
            description: data.description,
            company: data.company ?? "",
            organization: data.organization ?? "",
            status: data.status,
            location: data.location,
            bidangId: data.bidangId ?? null,
            kualifikasi: data.kualifikasi,
            tugasTanggungJawab: data.tugasTanggungJawab,
            kualifikasiTambahan: data.kualifikasiTambahan,
            jobType: data.jobType,
            startDate: data.startDate ? new Date(data.startDate) : undefined,
            endDate: data.endDate ? new Date(data.endDate) : undefined,
          },
        });

        results.push(created);
      }

      return NextResponse.json(results, { status: 201 });
    }

    // jika body object tunggal
    const parsed = createLowonganSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid input", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const slug =
      data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") +
      "-" +
      Math.random().toString(36).substring(2, 7);

    const created = await prisma.lowongan.create({
      data: {
        userId: data.userId,
        slug,
        title: data.title,
        description: data.description,
        company: data.company ?? "",
        organization: data.organization ?? "",
        status: data.status,
        location: data.location,
        bidangId: data.bidangId ?? null,
        kualifikasi: data.kualifikasi,
        tugasTanggungJawab: data.tugasTanggungJawab,
        kualifikasiTambahan: data.kualifikasiTambahan,
        jobType: data.jobType,
        startDate: data.startDate ? new Date(data.startDate) : undefined,
        endDate: data.endDate ? new Date(data.endDate) : undefined,
      },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error("POST LOWONGAN ERROR", error);
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
}
