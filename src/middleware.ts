import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { env } from "~/env.mjs";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	console.log("Middleware ran");
	if (request.cookies.get("dashpass")?.value === env.DASHPASS) {
		console.log("Logged in");
		return NextResponse.next();
	} else {
		const url = request.nextUrl.clone();
		url.pathname = "/dash/login";
		return NextResponse.redirect(url);
	}
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ["/dash"],
};
