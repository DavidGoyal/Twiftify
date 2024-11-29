import React from "react";
import FetchMyNfts from "./fetch-my-nfts";

const AllNfts = () => {
	return (
		<div className="w-full flex flex-wrap gap-4 overflow-y-auto justify-center items-center min-h-screen p-8">
			<FetchMyNfts />
		</div>
	);
};

export default AllNfts;
