"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { publicKey } from "@metaplex-foundation/umi";
import { fetchAllDigitalAssetWithTokenByOwner } from "@metaplex-foundation/mpl-token-metadata";
import LoadingCard from "./loading-card";
import NftCard from "./nft-card";
import { NFTMetadata } from "@/types/types";

const fetchAllNftsFunction = async ({
	ownerPublicKey,
	setLoading,
	setNfts,
}: {
	ownerPublicKey: string;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setNfts: React.Dispatch<React.SetStateAction<(NFTMetadata | undefined)[]>>;
}) => {
	try {
		const umi = createUmi(process.env.NEXT_PUBLIC_RPC_URL as string);

		const PublicKey = publicKey(ownerPublicKey);

		const allNFTs = await fetchAllDigitalAssetWithTokenByOwner(umi, PublicKey);

		const allNftsMetadata: (NFTMetadata | undefined)[] = await Promise.all(
			allNFTs.map(async (nft) => {
				try {
					const response = await fetch(nft.metadata.uri);
					if (!response.ok) {
						return;
					}
					const metadata = await response.json();
					return {
						name: metadata.name,
						image: metadata.image,
						publicKey: nft.publicKey,
					};
				} catch {
					return;
				}
			})
		);

		setNfts(allNftsMetadata);
	} catch (error) {
		console.error("Error fetching NFTs:", error);
	} finally {
		setLoading(false);
	}
};

const FetchMyNfts = () => {
	const wallet = useWallet();
	const [loading, setLoading] = useState(true);
	const [nfts, setNfts] = useState<(NFTMetadata | undefined)[]>([]);

	const fetchNfts = useCallback(async () => {
		if (wallet.connected && wallet.publicKey) {
			await fetchAllNftsFunction({
				ownerPublicKey: wallet.publicKey.toString(),
				setLoading,
				setNfts,
			});
		} else if (!wallet.connecting) {
			setLoading(false);
		}
	}, [wallet]);

	useEffect(() => {
		fetchNfts();
	}, [fetchNfts]);

	if (loading) {
		return Array.from({ length: 12 }).map((_, index) => (
			<LoadingCard key={index} />
		));
	}

	if (!wallet.connected || !wallet.publicKey) {
		return <p className="text-white">Connect your wallet to view your NFTs</p>;
	}

	return nfts.length > 0 ? (
		nfts.map((nft, index) => {
			if (nft) return <NftCard key={index} nft={nft} />;
		})
	) : (
		<p className="text-white">You have No NFTs 😭.</p>
	);
};

export default FetchMyNfts;
