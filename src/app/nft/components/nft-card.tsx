"use client";

import { programConnection, storeAccount } from "@/anchor/anchor-client";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { NFTMetadata } from "@/types/types";
import { AnchorProvider, Program, setProvider } from "@coral-xyz/anchor";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import { User } from "next-auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import idl from "../../../anchor/idl.json";
import type { SolanaStore } from "../../../anchor/types/anchor-types";

const NftCard = ({
	nft,
	user,
}: {
	nft: NFTMetadata;
	user:
		| ({
				token?: string;
		  } & User)
		| undefined;
}) => {
	const router = useRouter();
	const wallet = useAnchorWallet();
	const [loading, setLoading] = useState(false);

	if (!wallet?.publicKey) {
		return <p>Connect your wallet to view your NFTs</p>;
	}

	const linkNftToXUsername = async () => {
		setLoading(true);
		try {
			if (!user) {
				return toast.error("Login first to link your NFT");
			}
			const response = await axios.get("https://api.x.com/2/users/me", {
				headers: { Authorization: `Bearer ${user?.token}` },
			});
			console.log(response?.data?.username);

			if (!response?.data?.username) {
				return toast.error("Internal error, please try again");
			}

			const provider = new AnchorProvider(programConnection, wallet, {});
			setProvider(provider);
			const program = new Program(idl as SolanaStore, provider);

			const tx = await program.methods
				.setValue(
					wallet.publicKey.toString() + nft.publicKey,
					response?.data?.username
				)
				.accounts({
					storeAccount: storeAccount,
					user: wallet.publicKey,
				})
				.rpc();

			return toast.success("NFT linked to your X Username", {
				description: "Transaction: " + tx,
			});
		} catch (error) {
			console.error(error);
			return toast.error("Error linking NFT to your X Username");
		} finally {
			setLoading(false);
		}
	};
	return (
		<div className="w-[220px] h-[350px] rounded-xl bg-[#2A3237] flex flex-col gap-2">
			<img
				src={nft.image}
				className="rounded-xl h-[75%] w-full"
				alt={nft.name}
			/>
			<div className="w-full flex justify-between px-4">
				<p className="text-[#A6DBFF] font-bold">{nft.name.split("#")[0]}</p>
				<p className="text-[#A6DBFF] font-bold">
					{nft.name.split("#")[1] ? "#" + nft.name.split("#")[1] : ""}
				</p>
			</div>
			<div className="w-full flex justify-between px-4">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger
							onClick={linkNftToXUsername}
							disabled={loading}
							className="h-9 px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
						>
							Link
						</TooltipTrigger>
						<TooltipContent>Link NFT to your X Username</TooltipContent>
					</Tooltip>
				</TooltipProvider>

				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger
							onClick={() =>
								router.push(`/nft/${wallet.publicKey}/${nft.publicKey}`)
							}
							disabled={loading}
							className="h-9 px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
						>
							View
						</TooltipTrigger>
						<TooltipContent>View NFT</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
		</div>
	);
};

export default NftCard;
