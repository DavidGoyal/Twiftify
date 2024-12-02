"use client";

import { getValue } from "@/anchor/anchor-server";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { NFTDetails } from "@/types/types";
import { DigitalAsset } from "@metaplex-foundation/mpl-token-metadata";
import { useEffect, useState } from "react";
import ShareComponent from "./share-component";
import { CopyOutlined as Copy } from "@ant-design/icons";

const FetchNft = ({
	userId,
	nftId,
	asset,
}: {
	userId: string;
	nftId: string;
	asset: DigitalAsset;
}) => {
	const [nft, setNft] = useState<NFTDetails>();
	const [xUrl, setXUrl] = useState("");
	const [loading, setLoading] = useState(true);

	const fetchNFTMetadata = async (
		nftId: string,
		userId: string,
		asset: DigitalAsset
	) => {
		try {
			if (asset.metadata.uri) {
				const response = await fetch(asset.metadata.uri);
				const jsonMetadata = await response.json();
				setNft({
					name: jsonMetadata.name,
					description: jsonMetadata.description,
					image: jsonMetadata.image,
					details: {
						mint: asset.publicKey.toString(),
						owner: asset.metadata.header.owner.toString(),
						metadataURI: asset.metadata.uri,
					},
					attributes: jsonMetadata?.attributes?.map(
						(attribute: { trait_type: string; value: string }) => {
							return {
								type: attribute.trait_type,
								value: attribute.value,
							};
						}
					),
				});

				const value = await getValue({ id: userId + nftId });

				if (value) {
					setXUrl(value);
				}
			}
		} catch (error) {
			console.error("Error:", error);
		} finally {
			setLoading(false);
		}
	};

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);
	};

	useEffect(() => {
		fetchNFTMetadata(nftId, userId, asset);
	}, [nftId, asset, userId]);

	return loading ? (
		<>
			<main className="w-full h-[80vh] flex flex-col lg:flex-row justify-between items-center p-12 px-24 pt-3">
				<Skeleton className="h-full w-[100%] lg:w-[50%] rounded-2xl bg-gray-200" />
				<div className="h-full w-[100%] lg:w-[43%] flex flex-col gap-3">
					<div className="w-full flex flex-col gap-2">
						<h1 className="text-4xl font-bolg text-white border-b-2 border-[#A6DBFF] w-full py-4">
							DETAILS
						</h1>
						<Skeleton className="flex w-full h-16 justify-between items-center bg-gray-200" />
					</div>
					<div className="w-full flex flex-col gap-2">
						<h1 className="text-4xl font-bolg text-white border-b-2 border-[#A6DBFF] w-full py-4">
							{`ATTRIBUTES`}
						</h1>
						<Skeleton className="flex flex-wrap h-16 w-full gap-2 pl-2 bg-gray-200" />
					</div>
				</div>
			</main>
		</>
	) : (
		<div className="w-full flex flex-col pt-4 gap-2">
			<div className="w-full flex justify-between items-center">
				<h1 className="text-white text-4xl lg:text-2xl pl-8 lg:pl-24 font-bold">
					{nft?.name}
				</h1>
				<ShareComponent
					url={window.location.href}
					title={`Hey guys check out my new nft holding ${nft?.name}`}
				/>
			</div>
			<main className="w-full min-h-[80vh] flex flex-col lg:flex-row justify-between p-8 lg:p-12 lg:px-24 pt-0 lg:pt-0">
				<img
					src={nft!.image}
					alt={nft!.name}
					className="h-full rounded-2xl w-[100%] lg:w-[50%]"
				/>
				<div className="h-full w-[100%] lg:w-[43%] flex flex-col gap-3">
					<div className="w-full flex flex-col gap-2">
						<h1 className="text-4xl font-bold text-white border-b-2 border-[#A6DBFF] w-full py-4">
							DETAILS
						</h1>
						<div className="flex w-full justify-between items-center">
							<p className="text-white text-lg">Mint</p>
							<div className="flex gap-2 items-center">
								<button
									className="text-white"
									onClick={() => copyToClipboard(nft!.details.mint)}
								>
									<Copy size={30} />
								</button>
								<a
									className="text-white text-lg hover:underline"
									href={`https://solscan.io/account/${nft!.details.mint}`}
									target="_blank"
								>
									{nft?.details?.mint.slice(0, 5)}
								</a>
							</div>
						</div>
						<div className="flex w-full justify-between items-center">
							<p className="text-white text-lg">Owner</p>
							<div className="flex gap-2 items-center">
								<button
									className=" text-white "
									onClick={() => copyToClipboard(nft!.details.owner)}
								>
									<Copy size={30} />
								</button>
								<a
									className="text-white text-lg hover:underline"
									href={`https://solscan.io/account/${nft?.details?.owner}`}
									target="_blank"
								>
									{nft?.details?.owner.slice(0, 5)}
								</a>
							</div>
						</div>
						<div className="flex w-full justify-between items-center">
							<p className="text-white text-lg">Metadata</p>
							<a
								className="text-white text-lg hover:underline"
								href={`${nft?.details?.metadataURI}`}
								target="_blank"
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
									className="lucide lucide-external-link"
								>
									<path d="M15 3h6v6" />
									<path d="M10 14 21 3" />
									<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
								</svg>
							</a>
						</div>
						{xUrl !== "" && (
							<div className="flex w-full justify-between items-center">
								<p className="text-white text-lg">Nft Owner</p>
								<a
									className="text-white text-lg hover:underline"
									href={`https://x.com/${xUrl}`}
									target="_blank"
								>
									{xUrl}
								</a>
							</div>
						)}
					</div>

					<div className="w-full flex flex-col gap-2">
						<h1 className="text-4xl font-bolg text-white border-b-2 border-[#A6DBFF] w-full py-4">
							{`ATTRIBUTES  [${nft?.attributes?.length || 0}]`}
						</h1>
						<div className="flex flex-wrap w-full gap-2 pl-2">
							{nft?.attributes?.map((attribute, index) => (
								<AttributCard
									type={attribute.type}
									value={attribute.value}
									key={index}
								/>
							))}
						</div>
					</div>

					<Accordion type="single" collapsible>
						<AccordionItem
							value="item-1"
							className="border-[#A6DBFF] border-t-[1px] text-white"
						>
							<AccordionTrigger>
								About {nft?.name.split("#")[0]}
							</AccordionTrigger>
							<AccordionContent>{nft?.description}</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</main>
		</div>
	);
};

const AttributCard = ({ type, value }: { type: string; value: string }) => {
	return (
		<Card className="bg-[#181c1e] border-[#2a2f34] w-[180px] h-[80px]">
			<CardHeader className="m-0 p-2 py-4 gap-2">
				<CardTitle className="text-[#BFC4CA] text-sm">{type}</CardTitle>
				<CardDescription className="text-white text-lg">
					{value}
				</CardDescription>
			</CardHeader>
		</Card>
	);
};

export default FetchNft;
