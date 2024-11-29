import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { NFTMetadata } from "@/types/types";
import { useRouter } from "next/navigation";
import React from "react";

const NftCard = ({ nft }: { nft: NFTMetadata }) => {
	const router = useRouter();
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
						<TooltipTrigger>
							<Button>Link</Button>
						</TooltipTrigger>
						<TooltipContent>Link NFT to your X Username</TooltipContent>
					</Tooltip>
				</TooltipProvider>

				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<Button onClick={() => router.push(`/nft/${nft.publicKey}`)}>
								View
							</Button>
						</TooltipTrigger>
						<TooltipContent>View NFT</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
		</div>
	);
};

export default NftCard;
