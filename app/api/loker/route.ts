import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();


const createLowonganSchema = z.object({
  userId: z.string(),
  title: z.string().min(3),
  description: z.string().min(10),
  company: z.string().min(2),
  location: z.string().min(2),
  bidangId: z.string().optional(),

  kualifikasi: z.array(z.string()).default([]),
  tugasTanggungJawab: z.array(z.string()).default([]),
  kualifikasiTambahan: z.array(z.string()).default([]),
});


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
        company: data.company,
        location: data.location,
        bidangId: data.bidangId ?? null,

        kualifikasi: data.kualifikasi,
        tugasTanggungJawab: data.tugasTanggungJawab,
        kualifikasiTambahan: data.kualifikasiTambahan,
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
