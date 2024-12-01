import FetchNft from "./components/fetch-nft";
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

const fetchNftAsset = async (nftId: string) => {
	try {
		const umi = createUmi(process.env.NEXT_PUBLIC_RPC_URL as string);

		umi.use(mplTokenMetadata());

		const keypair = generateSigner(umi);
		umi.use(signerIdentity(createSignerFromKeypair(umi, keypair)));

		const mintAddress = publicKey(nftId);

		const asset = await fetchDigitalAsset(umi, mintAddress);
		return asset;
	} catch {
		return null;
	}
};

export default async function Page({
	params,
}: {
	params: Promise<{ userId: string; nftId: string }>;
}) {
	const userId = (await params).userId;
	const nftId = (await params).nftId;

	const asset = await fetchNftAsset(nftId);

	if (!asset || !asset.publicKey || !asset.metadata) {
		return notFound();
	}
	return <FetchNft userId={userId} nftId={nftId} asset={asset} />;
}
