import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = [{ data: "ini loker" }]; 
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    // console.error("[GET LOWONGAN ERROR]", error);
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
}
