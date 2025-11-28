import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(req: Request) {
  const { sendLowonganId, status } = await req.json();


  try {
    const existing = await prisma.sendLowonganStatus.findUnique({
      where: { sendLowonganId },
    });

    if (existing) {
      await prisma.sendLowonganStatus.update({
        where: { sendLowonganId },
        data: { status },
      });
    } else {
      await prisma.sendLowonganStatus.create({
        data: {
          sendLowonganId,
          status,
        },
      });
    }

    return NextResponse.json({ message: "Status updated" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Failed to update status" },
      { status: 500 }
    );
  }
}
