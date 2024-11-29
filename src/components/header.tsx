import Link from "next/link";
import React from "react";
import { signIn, signOut } from "@/auth";
import { auth } from "../auth";
import WalletButton from "./ui/wallet-button";

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
		<header className="w-full h-[6rem] flex justify-between items-center p-8 pb-2 border-b-[1px] border-[#2a2f34]">
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

			<div className="flex gap-4">
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
				<WalletButton />
			</div>
		</header>
	);
};

export default Header;
