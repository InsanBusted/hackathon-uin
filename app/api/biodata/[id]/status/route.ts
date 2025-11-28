import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const body = await req.json();
    const { statusAuto } = body;

    if (statusAuto === undefined) {
      return NextResponse.json(
        { message: "statusAuto harus dikirim" },
        { status: 400 }
      );
    }

    const updated = await prisma.biodata.update({
      where: { userId: id },
      data: { statusAuto },
    });

    return NextResponse.json({ message: "Status updated", updated });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: error.message || "Server error" },
      { status: 500 }
    );
  }
}
