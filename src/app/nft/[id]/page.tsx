import FetchNft from "./components/fetch-nft";

export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const id = (await params).id;
	return <FetchNft id={id} />;
}
