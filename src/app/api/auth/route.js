import { NextResponse } from "next/server";

export async function GET(req) {
  const auth = req.cookies.get("auth");
  return NextResponse.json({ loggedIn: !!auth });
}
