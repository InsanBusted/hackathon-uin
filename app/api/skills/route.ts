import {prisma} from "@/lib/prisma";
import { SkillSchema } from "@/schemas/skills";
import { NextResponse } from "next/server";
import { z } from "zod";



const bulkSchema = z.array(SkillSchema);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const parse: any = bulkSchema.safeParse(body);

    if (!parse.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parse.error.errors },
        { status: 400 }
      );
    }

    const created = await prisma.skill.createMany({
      data: parse.data,
      skipDuplicates: true,
    });

    return NextResponse.json({ message: `Inserted ${created.count} skill` });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const skillList = await prisma.skill.findMany({
      orderBy: { name: "asc" },
    });

    return NextResponse.json(skillList);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
