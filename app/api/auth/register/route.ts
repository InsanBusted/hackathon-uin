import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { registerUserSchema } from "@/types/userSchema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = registerUserSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Validation error", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { email, username, password, role } = parsed.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        role,
      },
    });

    return NextResponse.json(
      { message: "User registered successfully", user },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
}
