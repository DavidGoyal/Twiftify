"use client";

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
import { NFTDetails } from "@/types/types";
import {
	fetchDigitalAsset,
	mplTokenMetadata,
} from "@metaplex-foundation/mpl-token-metadata";
import {
	createSignerFromKeypair,
	generateSigner,
	publicKey,
	signerIdentity,
} from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

const FetchNft = ({ id }: { id: string }) => {
	const [nft, setNft] = useState<NFTDetails>();
	const [loading, setLoading] = useState(true);

	const fetchNFTMetadata = async (id: string) => {
		try {
			const umi = createUmi(process.env.NEXT_PUBLIC_RPC_URL as string);

			umi.use(mplTokenMetadata());

			const keypair = generateSigner(umi);
			umi.use(signerIdentity(createSignerFromKeypair(umi, keypair)));

			const mintAddress = publicKey(id);

			const asset = await fetchDigitalAsset(umi, mintAddress);
			if (!asset) {
				return notFound();
			}
			console.log(asset);

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
					attributes: jsonMetadata.attributes.map(
						(attribute: { trait_type: string; value: string }) => {
							return {
								type: attribute.trait_type,
								value: attribute.value,
							};
						}
					),
				});
			}
		} catch (error) {
			console.error("Error:", error);
			return notFound();
		} finally {
			setLoading(false);
		}
	};

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);
	};

	useEffect(() => {
		fetchNFTMetadata(id);
	}, [id]);

	return loading ? (
		<p>Loading...</p>
	) : (
		<>
			<h1 className="text-white text-2xl pl-24 pt-4 font-bold">{nft?.name}</h1>
			<main className="w-full min-h-[80vh] flex justify-between items-center p-12 px-24 pt-3">
				<img
					src={nft!.image}
					alt={nft!.name}
					className="h-full rounded-2xl w-[50%]"
				/>
				<div className="h-full w-[43%] flex flex-col gap-3">
					<div className="w-full flex flex-col gap-2">
						<h1 className="text-4xl font-bold text-white border-b-2 border-[#A6DBFF] w-full py-4">
							DETAILS
						</h1>
						<div className="flex w-full justify-between items-center">
							<p className="text-white text-md">Mint</p>
							<div className="flex gap-2 items-center">
								<button
									className="text-white"
									onClick={() => copyToClipboard(nft!.details.mint)}
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
										className="lucide lucide-copy"
									>
										<rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
										<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
									</svg>
								</button>
								<a
									className="text-white text-md hover:underline"
									href={`https://solscan.io/account/${nft!.details.mint}`}
									target="_blank"
								>
									{nft!.details.mint.slice(0, 5)}
								</a>
							</div>
						</div>
						<div className="flex w-full justify-between items-center">
							<p className="text-white text-md">Owner</p>
							<div className="flex gap-2 items-center">
								<button
									className=" text-white "
									onClick={() => copyToClipboard(nft!.details.owner)}
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
										className="lucide lucide-copy"
									>
										<rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
										<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
									</svg>
								</button>
								<a
									className="text-white text-md hover:underline"
									href={`https://solscan.io/account/${nft!.details.owner}`}
									target="_blank"
								>
									{nft!.details.owner.slice(0, 5)}
								</a>
							</div>
						</div>
						<div className="flex w-full justify-between items-center">
							<p className="text-white text-md">Metadata</p>
							<a
								className="text-white text-md hover:underline"
								href={`${nft!.details.metadataURI}`}
								target="_blank"
							>
								{nft!.details.owner.slice(0, 5)}
							</a>
						</div>
					</div>

					<div className="w-full flex flex-col gap-2">
						<h1 className="text-4xl font-bold text-white border-b-2 border-[#A6DBFF] w-full py-4">
							{`ATTRIBUTES  [${nft?.attributes.length}]`}
						</h1>
						<div className="flex flex-wrap w-full gap-2 pl-2">
							{nft?.attributes.map((attribute, index) => (
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
		</>
	);
};

const AttributCard = ({ type, value }: { type: string; value: string }) => {
	return (
		<Card className="bg-[#181c1e] border-[#2a2f34] w-[180px] h-[80px]">
			<CardHeader className="m-0 p-2 py-4 gap-2">
				<CardTitle className="text-[#BFC4CA] text-sm">{type}</CardTitle>
				<CardDescription className="text-white text-md">
					{value}
				</CardDescription>
			</CardHeader>
		</Card>
	);
};

export default FetchNft;
