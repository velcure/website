import Negotiator from "negotiator";
import { NextResponse, type NextRequest } from "next/server";

const locales = ["en"];
const headers = { "accept-language": "en-US,en;q=0.5" };
const languages = new Negotiator({ headers }).languages();
const defaultLocale = "en";

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export function middleware(request: NextRequest) {
  // Setting cookies on the response using the `ResponseCookies` API
  const response = NextResponse.next();

  return response;
}
