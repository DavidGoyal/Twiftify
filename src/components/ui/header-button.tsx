"use client";

import React, { useEffect, useState } from "react";
import WalletButton from "./wallet-button";
import Link from "next/link";

const HeaderButton = ({
	isLoggedIn,
	twitterSignIn,
	twittersignOut,
}: {
	isLoggedIn: boolean;
	twitterSignIn: () => void;
	twittersignOut: () => void;
}) => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "auto";
	}, [open]);

	return (
		<>
			<button className="block sm:hidden" onClick={() => setOpen(true)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-menu text-[#D4B844]"
				>
					<line x1="4" x2="20" y1="12" y2="12" />
					<line x1="4" x2="20" y1="6" y2="6" />
					<line x1="4" x2="20" y1="18" y2="18" />
				</svg>
			</button>
			<div
				className={`h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-80 z-10 pt-[20%] transition-transform transform ${
					open ? "translate-x-0" : "-translate-y-full"
				} sm:hidden`}
			>
				<button
					className="absolute top-12 right-8"
					onClick={() => setOpen(false)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-x text-[#D4B844]"
					>
						<path d="M18 6 6 18" />
						<path d="m6 6 12 12" />
					</svg>
				</button>
				<div className="gap-8 flex flex-col justify-center items-center">
					<Link
						href={"/"}
						className="text-white text-2xl"
						style={{
							color: window.location.pathname === "/" ? "#D4B844" : "white",
						}}
						onClick={() => setOpen(false)}
					>
						Home
					</Link>
					<Link
						href={"/nft"}
						className="text-white text-2xl"
						style={{
							color: window.location.pathname === "/nft" ? "#D4B844" : "white",
						}}
						onClick={() => setOpen(false)}
					>
						Nft
					</Link>
					{isLoggedIn ? (
						<button
							className="bg-[#D4B844] text-white font-semibold px-4 py-2 rounded-xl"
							onClick={() => {
								twittersignOut();
								setOpen(false);
							}}
						>
							Sign Out
						</button>
					) : (
						<button
							className="bg-[#D4B844] text-white font-semibold px-4 py-2 rounded-xl"
							onClick={() => {
								twitterSignIn();
								setOpen(false);
							}}
						>
							Sign In
						</button>
					)}
					<WalletButton />
				</div>
			</div>
		</>
	);
};

export default HeaderButton;
