export type NFT = {
	publicKey: string;
	metadata: {
		name: string;
		symbol: string;
		uri: string;
	};
};

export type NFTMetadata = {
	publicKey: string;
	name: string;
	image: string;
};

export type NFTDetails = {
	name: string;
	description: string;
	image: string;
	details: {
		mint: string;
		owner: string;
		metadataURI: string;
	};
	attributes: {
		type: string;
		value: string;
	}[];
};
