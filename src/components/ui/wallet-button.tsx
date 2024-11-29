"use client";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React, { useState, useEffect } from "react";
import { Skeleton } from "./skeleton";

const WalletButton = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <Skeleton className="w-[120px] h-[40px] rounded-full bg-gray-200" />;
	}

	return (
		<WalletMultiButton
			style={{
				backgroundColor: "#D4B844",
				color: "white",
				fontWeight: "600",
				padding: "8px 16px",
				borderRadius: "12px",
			}}
		/>
	);
};

export default WalletButton;
