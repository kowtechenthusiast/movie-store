import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function middleware(request) {
  const path = request.nextUrl.pathname;

  const notPublic = path == "/favourites" || path.startsWith("/details");

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (notPublic && !token)
    return NextResponse.redirect(new URL("/signin", request.nextUrl));
  if ((path == "/signin" || path == "/signup") && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/signin",
    "/signup",
    "/about",
    "/favourites",
    "/details/:id*",
    "/now-playing/:page*",
    "/popular/:page*",
    "/search/:searchTerm*",
    "/top-rated/:page*",
    "/upcoming/:page*",
  ],
};
