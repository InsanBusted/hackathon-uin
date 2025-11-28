// app/api/biodata/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params; 
    const userId = resolvedParams.id;
    if (!userId) {
      return NextResponse.json(
        { message: "userId tidak ditemukan" },
        { status: 400 }
      );
    }
    const biodata = await prisma.biodata.findUnique({
      where: { userId },
      select: {
        id: true,
        userId: true,
        firstName: true,
        lastName: true,
        fullName: true,
        address: true,
        phone: true,
        documentUrl: true,
        portfolio: true,
      },
    });
    if (!biodata) {
      return NextResponse.json(
        { message: "Biodata tidak ditemukan" },
        { status: 404 }
      );
    }
    return NextResponse.json({ biodata });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: error.message || "Server error" },
      { status: 500 }
    );
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> } // params sebagai Promise
) {
  try {
    const resolvedParams = await params;  // <--- unwrap Promise
    const userId = resolvedParams.id;

    if (!userId) {
      return NextResponse.json({ message: "userId tidak ditemukan" }, { status: 400 });
    }

    const body = await req.json();
    const {
      firstName,
      lastName,
      fullName,
      address,
      phone,
      documentUrl,
      portfolio,
      bidangId,
    } = body;

    if (!firstName || !fullName) {
      return NextResponse.json(
        { message: "firstName dan fullName wajib diisi" },
        { status: 400 }
      );
    }

    // cek apakah biodata sudah ada
    const existing = await prisma.biodata.findUnique({
      where: { userId },
    });

    if (existing) {
      return NextResponse.json({ message: "Biodata sudah dibuat" }, { status: 400 });
    }

    const biodata = await prisma.biodata.create({
      data: {
        userId,
        firstName,
        lastName,
        fullName,
        address,
        phone,
        documentUrl,
        portfolio,
        bidangId,
      },
    });

    return NextResponse.json({ message: "Biodata berhasil dibuat", biodata });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: error.message || "Server error" }, { status: 500 });
  }
}
