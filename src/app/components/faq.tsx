import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
	return (
		<div className="w-full flex flex-col lg:flex-row justify-between items-center p-8 my-8 gap-8">
			<div className="flex flex-col gap-6 w-[90%] lg:w-[30%]">
				<h3 className="text-4xl sm:text-6xl font-bold text-white">
					Any questions?
					<br /> We got you.
				</h3>
				<p className="text-sm text-white font-semibold">
					Have questions? No worries! At Twiftify, we&apos;re here to help.
					Whether you&apos;re new to NFTs or an expert, our support team is
					ready to assist you. Reach out anytime, and we&apos;ll ensure your
					experience is smooth and easy!
				</p>
			</div>
			<Accordion
				type="single"
				collapsible
				className="w-[90%] lg:w-[50%] text-white"
			>
				<AccordionItem value="item-1" className="border-[#A6DBFF]">
					<AccordionTrigger className="font-semibold">
						What is Twiftify?
					</AccordionTrigger>
					<AccordionContent>
						Twiftify is a fully decentralized platform that allows you to link
						your NFTs with your X (formerly Twitter) profile. It uses blockchain
						technology and smart contracts to ensure secure, authentic, and
						tamper-proof connections.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2" className="border-[#A6DBFF]">
					<AccordionTrigger className="font-semibold">
						How does Twiftify work?
					</AccordionTrigger>
					<AccordionContent>
						Twiftify uses a custom smart program on the blockchain to link your
						NFTs to your X profile. Once linked, your NFTs can display your X
						profile URL, allowing you to share them with your audience easily
						and securely.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3" className="border-[#A6DBFF]">
					<AccordionTrigger className="font-semibold">
						Is Twiftify centralized?
					</AccordionTrigger>
					<AccordionContent>
						No, Twiftify is entirely decentralized. All operations, including
						NFT linking, are handled through blockchain-based smart contracts,
						ensuring full transparency and user control.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4" className="border-[#A6DBFF]">
					<AccordionTrigger className="font-semibold">
						Do I need a wallet to use Twiftify?
					</AccordionTrigger>
					<AccordionContent>
						Yes, you need a solana wallet to interact with Twiftify. This wallet
						will be used to sign transactions and link your NFTs to your X
						profile securely.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-5" className="border-[#A6DBFF]">
					<AccordionTrigger className="font-semibold">
						Are there any fees for using Twiftify?
					</AccordionTrigger>
					<AccordionContent>
						There might be minimal blockchain gas fees associated with the smart
						contract interactions, but Twiftify itself does not charge any
						additional platform fees.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-6" className="border-[#A6DBFF]">
					<AccordionTrigger className="font-semibold">
						Is Twiftify open source?
					</AccordionTrigger>
					<AccordionContent>
						The smart contract powering Twiftify is fully auditable, and parts
						of the platform are open source, ensuring transparency and trust.
						You can view it at{" "}
						<a
							href="https://github.com/DavidGoyal/twiftify"
							className="text-blue-500 underline"
						>
							Twiftify
						</a>
						.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default Faq;
