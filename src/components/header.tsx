import Link from "next/link";
import React from "react";
import { signIn, signOut } from "@/auth";
import { auth } from "../auth";
import WalletButton from "./ui/wallet-button";
import Image from "next/image";
import img from "../app/favicon.ico";
import HeaderButton from "./ui/header-button";

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
			<Link href={"/"} className="flex gap-2 items-center">
				<Image
					src={img}
					width={40}
					height={40}
					alt={""}
					className="rounded-full"
				/>
				<h3 className="text-2xl font-bold text-[#D4B844]">Twiftify</h3>
			</Link>

			<nav className="hidden gap-6 sm:flex">
				<Link href={"/"} className="text-white">
					Home
				</Link>
				<Link href={"/nft"} className="text-white">
					Nft
				</Link>
			</nav>

			<div className="hidden gap-4 sm:flex">
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

			<HeaderButton
				isLoggedIn={session?.user ? true : false}
				twitterSignIn={twitterSignIn}
				twittersignOut={twittersignOut}
			/>
		</header>
	);
};

export default Header;
