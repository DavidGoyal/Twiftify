import React from "react";
import FetchMyNfts from "./fetch-my-nfts";
import { auth } from "@/auth";

const AllNfts = async () => {
	const session = await auth();
	const user = session?.user;
	return (
		<div className="w-full flex flex-wrap gap-4 overflow-y-auto justify-center items-center min-h-screen p-8">
			<FetchMyNfts user={user} />
		</div>
	);
};

export default AllNfts;
