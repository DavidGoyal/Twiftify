import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
	const session = await auth();
	const user = session?.user;

	const url = request.nextUrl;

	if (!user && !(url.pathname === "/")) {
		return NextResponse.redirect(new URL("/", request.url));
	}
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ["/", "/myNft"],
};
