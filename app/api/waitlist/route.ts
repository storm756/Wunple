import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json().catch(() => ({}));
  if (typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  return NextResponse.json({ success: true, email });
}
