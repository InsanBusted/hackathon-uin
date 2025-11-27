import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const bidangSchema = z.object({
  slug: z.string(),
  nama: z.string(),
});

const bulkSchema = z.array(bidangSchema);

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body = await req.json();
    const parsed = bulkSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Invalid input",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const created = await prisma.bidang.createMany({
      data: parsed.data,
      skipDuplicates: true,
    });

    return NextResponse.json({
      message: `Inserted ${created.count} bidang`,
    });
  } catch (error) {
    console.error("[BIDANG POST ERROR]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    const data = await prisma.bidang.findMany({
      orderBy: { nama: "asc" },
      select: { id: true, nama: true, slug: true },
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("[BIDANG GET ERROR]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
