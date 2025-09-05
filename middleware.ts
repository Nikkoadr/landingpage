import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // proteksi semua route /admin/*
  if (pathname.startsWith("/admin")) {
    const token = req.cookies.get("jwt")?.value; // ambil token HttpOnly

    if (!token) {
      // redirect ke login jika token tidak ada
      const loginUrl = new URL("/auth/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // semua route /admin/*
};
