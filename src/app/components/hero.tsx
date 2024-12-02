import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<article className="w-full h-[90vh] sm:h-[calc(90vh-6rem)] p-8">
			<div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-12 bg-[url('/HeroBG.png')] bg-no-repeat bg-cover bg-center rounded-3xl">
				<Image
					src={"/Solana.png"}
					alt="Solana Coin"
					width={500}
					height={500}
					className="w-[90%] md:w-[40%]"
				/>
				<div className="flex flex-col w-[90%] md:w-[35%]">
					<div className="flex flex-col">
						<h1 className="text-4xl font-bold text-[#D4B844]">Twiftify</h1>
						<h2 className="text-2xl font-bold text-white">
							Empower Your NFTs - Link,
							<br /> Showcase, Share.
						</h2>
					</div>
					<p className="text-[#D4B844] text-sm font-semibold">
						A seamless way to link your NFTs with your X (formerly Twitter)
						profile. Share your nft holdings effortlessly with your profile URL
						attached, ensuring visibility for your holdings. The platform&apos;s
						sleek, futuristic design reflects innovation and the creative spirit
						of the NFT space.
					</p>
				</div>
			</div>
		</article>
	);
};

export default Hero;
