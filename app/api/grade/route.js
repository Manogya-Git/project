import { NextResponse } from "next/server";
import { db } from "@/utils";
import { GRADES } from "@/utils/schema";

export async function GET() {
  try {
    const result = await db.select().from(GRADES);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch grades", details: error.message },
      { status: 500 }
    );
  }
}
