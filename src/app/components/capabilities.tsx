import Image from "next/image";
import React from "react";

const Capabilites = () => {
	return (
		<section className="w-full flex justify-between items-center p-6 mt-12">
			<p className="text-white text-6xl font-bold uppercase w-[40%]">
				Ownify&apos;s Capabilites
			</p>

			<div className="flex flex-col gap-4 w-[50%]">
				<CapabilitesCard
					title="Effortless Integration with Your Accounts"
					icon={
						<Image src={"/pencil.png"} alt="pencil" width={50} height={50} />
					}
					iconBgColor="#FF68D9"
					description="Quickly link your NFTs to your social or crypto accounts for better visibility and sharing. Whether it's your Twitter, Instagram, or wallet, we make it easy to connect and showcase your assets to the world."
				/>
				<CapabilitesCard
					title="Create Custom NFT Cards Instantly"
					icon={<Image src={"/cow.png"} alt="cow" width={50} height={50} />}
					iconBgColor="#40B651"
					description="Transform your NFTs into beautifully designed digital cards with a single click. Personalize each card to reflect your unique style, and share them across social media or within your network."
					alignLeft={false}
				/>
				<CapabilitesCard
					title="Connect Your Wallet Securely"
					icon={
						<Image src={"/wallet.png"} alt="wallet" width={50} height={50} />
					}
					iconBgColor="#689DFF"
					description="Ownify supports secure wallet connections with top-tier protection. Link your wallet to access your NFTs in a safe, user-friendly environment without worrying about security risks."
				/>
				<CapabilitesCard
					title="Keep Track of Your Entire NFT Collection"
					icon={<Image src={"/nft.png"} alt="nft" width={50} height={50} />}
					iconBgColor="#B6406B"
					description="Manage and display all your NFTs in one place. Whether you own one or a hundred, Ownify helps you organize and showcase them easily with a clean, intuitive dashboard."
					alignLeft={false}
				/>
			</div>
		</section>
	);
};

const CapabilitesCard = ({
	title,
	icon,
	iconBgColor,
	description,
	alignLeft = true,
}: {
	title: string;
	icon: React.ReactNode;
	iconBgColor: string;
	description: string;
	alignLeft?: boolean;
}) => {
	return (
		<div
			className={`flex justify-center gap-2 w-[50%] ${
				alignLeft ? "self-start" : "self-end"
			}`}
		>
			<div
				className={`flex items-center justify-center h-fit p-2 rounded-lg bg-[${iconBgColor}]`}
			>
				{icon}
			</div>
			<div>
				<h3 className="text-white text-md font-bold">{title}</h3>
				<p className="text-white text-sm">{description}</p>
			</div>
		</div>
	);
};

export default Capabilites;
