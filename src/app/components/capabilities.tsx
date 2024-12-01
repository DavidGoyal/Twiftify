import Image from "next/image";
import React from "react";

const Capabilites = () => {
	return (
		<section className="w-full flex flex-col lg:flex-row justify-between items-center p-8 mt-12 gap-8">
			<p className="text-white text-4xl sm:text-6xl font-bold uppercase w-[90%] lg:w-[40%] text-center text-wrap">
				Twiftify&apos;s Features
			</p>

			<div className="flex flex-col gap-4 w-[90%] lg:w-[50%]">
				<CapabilitesCard
					title="Effortless And Safe Integration with Your X Account"
					icon={
						<Image src={"/pencil.png"} alt="pencil" width={50} height={50} />
					}
					iconBgColor="#FF68D9"
					description="Twiftify operates on a completely decentralized platform, powered by a custom smart contract. Your NFTs are linked to your X profile without relying on centralized systems, ensuring security and transparency."
				/>
				<CapabilitesCard
					title="Gain More Visibility"
					icon={<Image src={"/cow.png"} alt="cow" width={50} height={50} />}
					iconBgColor="#40B651"
					description="Amplify your reach by integrating NFTs with your X profile. Twiftify helps you connect with a broader audience by combining social presence with blockchain creativity."
					alignLeft={false}
				/>
				<CapabilitesCard
					title="Blockchain-Powered Authenticity"
					icon={
						<Image src={"/wallet.png"} alt="wallet" width={50} height={50} />
					}
					iconBgColor="#689DFF"
					description="Every link between an NFT and an X profile is managed by a smart contract, guaranteeing authenticity, immutability, and complete user control over the data."
				/>
				<CapabilitesCard
					title="Keep Track of Your Entire NFT Collection"
					icon={<Image src={"/nft.png"} alt="nft" width={50} height={50} />}
					iconBgColor="#B6406B"
					description="Creators and collectors can easily connect through Twiftify. Display your NFTs and attract like-minded individuals for collaborations, trades, or sales."
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
			className={`flex justify-center gap-2 w-[100%] sm:w-[50%] ${
				alignLeft ? "self-start" : "self-end"
			}`}
		>
			<div
				className={`flex items-center justify-center h-fit p-2 rounded-lg`}
				style={{
					backgroundColor: iconBgColor,
				}}
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
