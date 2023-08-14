import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "de"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",
  localeDetection: true,
});

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    // "'/((?!_next).*)',",
    "/((?!api|_next/static|_next|favicon.ico).*)",
  ],
};
