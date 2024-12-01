/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/solana_store.json`.
 */
export type SolanaStore = {
	address: "AProoUZhgBATtU3nq66FDkwBJFq2JyYnSdvKwqFHxJTZ";
	metadata: {
		name: "solanaStore";
		version: "0.1.0";
		spec: "0.1.0";
		description: "Created with Anchor";
	};
	instructions: [
		{
			name: "getValue";
			discriminator: [88, 79, 40, 100, 21, 74, 119, 125];
			accounts: [
				{
					name: "storeAccount";
					writable: true;
				},
				{
					name: "user";
					signer: true;
				}
			];
			args: [
				{
					name: "addr";
					type: "string";
				}
			];
			returns: {
				option: "string";
			};
		},
		{
			name: "initialize";
			discriminator: [175, 175, 109, 31, 13, 152, 155, 237];
			accounts: [
				{
					name: "storeAccount";
					writable: true;
					signer: true;
				},
				{
					name: "user";
					writable: true;
					signer: true;
				},
				{
					name: "systemProgram";
					address: "11111111111111111111111111111111";
				}
			];
			args: [];
		},
		{
			name: "setValue";
			discriminator: [253, 214, 48, 201, 100, 201, 227, 219];
			accounts: [
				{
					name: "storeAccount";
					writable: true;
				},
				{
					name: "user";
					signer: true;
				}
			];
			args: [
				{
					name: "addr";
					type: "string";
				},
				{
					name: "value";
					type: "string";
				}
			];
		}
	];
	accounts: [
		{
			name: "storeAccount";
			discriminator: [158, 151, 50, 63, 120, 194, 135, 114];
		}
	];
	types: [
		{
			name: "keyValue";
			type: {
				kind: "struct";
				fields: [
					{
						name: "key";
						type: "string";
					},
					{
						name: "value";
						type: "string";
					}
				];
			};
		},
		{
			name: "storeAccount";
			type: {
				kind: "struct";
				fields: [
					{
						name: "values";
						type: {
							vec: {
								defined: {
									name: "keyValue";
								};
							};
						};
					}
				];
			};
		}
	];
};
