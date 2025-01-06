import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const path = req.nextUrl.pathname;
  const isExpired =
    token?.expiresIn && Date.now() > (token.expiresIn as number);

  const session =
    !!req.cookies.get("next-auth.session-token") ||
    !!req.cookies.get("__Secure-next-auth.session-token");

  if (!session || isExpired) {
    return NextResponse.redirect(
      new URL(`/api/auth/signin?callbackUrl=${path}`, req.url)
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
