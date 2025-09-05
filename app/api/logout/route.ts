import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  // panggil backend Go logout (optional)
  const cookie = req.cookies.get("jwt")?.value;
  if (cookie) {
    await fetch("http://localhost:8081/api/logout", {
      method: "POST",
      headers: { Cookie: `jwt=${cookie}` },
    });
  }

  // Hapus cookie di domain FE agar middleware Next.js mendeteksi
  const res = NextResponse.redirect(new URL("/auth/login", req.url));
  res.cookies.set({
    name: "jwt",
    value: "",
    path: "/",
    maxAge: 0,
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });

  return res;
}
