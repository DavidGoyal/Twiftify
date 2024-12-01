import { web3 } from "@coral-xyz/anchor";
import { Connection } from "@solana/web3.js";

export const programId = new web3.PublicKey(
	"5ZaqHHJ69BSEy9nVzvvdpPeKR6Zxy7Jp1ez6w2tasEhx"
);

export const storeAccount = new web3.PublicKey(
	"CsucnfYSSZaxhd4wbnmCC4aov2UvT7tj29ZZkKVHE3uL"
);

export const programConnection = new Connection(
	"https://devnet.helius-rpc.com/?api-key=6cee280d-6264-4697-8395-d066c1b30ffc"
);
