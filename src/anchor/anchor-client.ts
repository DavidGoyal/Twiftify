import { web3 } from "@coral-xyz/anchor";
import { Connection } from "@solana/web3.js";

export const programId = new web3.PublicKey(
	"AProoUZhgBATtU3nq66FDkwBJFq2JyYnSdvKwqFHxJTZ"
);

export const storeAccount = new web3.PublicKey(
	"F65F4FsqLkUF5h4dRAN1kAyRqoMdXARBD4KwudLw487u"
);

export const programConnection = new Connection(
	process.env.NEXT_PUBLIC_DEVNET_URL as string
);
