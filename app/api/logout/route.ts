import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  // panggil backend Go logout (optional)
  const cookie = req.cookies.get("access_token")?.value;
  if (cookie) {
    await fetch("http://localhost:8000/api/v1/auth/logout", {
      method: "POST",
      headers: { Cookie: `access_token=${cookie}` },
    });
  }

  // Hapus cookie di domain FE agar middleware Next.js mendeteksi
  const res = NextResponse.redirect(new URL("/auth/login", req.url));
  res.cookies.set({
    name: "access_token",
    value: "",
    path: "/",
    maxAge: 0,
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });

  return res;
}
