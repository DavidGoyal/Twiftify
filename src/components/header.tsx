import Link from "next/link";
import React from "react";
import { signIn, signOut } from "@/auth";
import { auth } from "../auth";

const Header = async () => {
	async function twitterSignIn() {
		"use server";
		await signIn("twitter", { redirectTo: "/" });
	}

	async function twittersignOut() {
		"use server";
		await signOut();
	}

	const session = await auth();

	return (
		<header className="w-full h-[6rem] flex justify-between items-center p-6 pb-2">
			<div>
				<h3 className="text-2xl font-bold text-[#D4B844]">Ownify</h3>
			</div>

			<nav className="flex gap-6">
				<Link href={"/"} className="text-white">
					Home
				</Link>
				<Link href={"/"} className="text-white">
					About
				</Link>
				<Link href={"/"} className="text-white">
					Contact
				</Link>
			</nav>

			{session?.user ? (
				<button
					className="bg-[#D4B844] text-white font-semibold px-4 py-2 rounded-xl"
					onClick={twittersignOut}
				>
					Sign Out
				</button>
			) : (
				<button
					className="bg-[#D4B844] text-white font-semibold px-4 py-2 rounded-xl"
					onClick={twitterSignIn}
				>
					Sign In
				</button>
			)}
		</header>
	);
};

export default Header;
