"use server";

import { AnchorProvider, Program, Wallet } from "@coral-xyz/anchor";
import { Keypair } from "@solana/web3.js";
import idl from "./idl.json";
import { SolanaStore } from "./types/anchor-types";
import { programConnection, storeAccount } from "./anchor-client";

export const getValue = async ({ id }: { id: string }) => {
	const wallet = new Wallet(Keypair.generate());
	const provider = new AnchorProvider(programConnection, wallet);
	const program = new Program(idl as SolanaStore, provider);

	const tx = (
		await program.account.storeAccount.fetch(storeAccount)
	).values.find((value) => value.key === id.toString());

	return tx?.value;
};

export const initialzeAccount = async () => {
	const wallet = new Wallet(Keypair.generate());
	const provider = new AnchorProvider(programConnection, wallet);
	const program = new Program(idl as SolanaStore, provider);
	const newStoreAccount = new Keypair();
	const tx = await program.methods
		.initialize()
		.accounts({
			storeAccount: newStoreAccount.publicKey,
			user: newStoreAccount.publicKey,
		})
		.signers([newStoreAccount])
		.rpc();
	console.log(tx);
};
