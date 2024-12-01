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
				<h3 className="text-5xl font-bold text-white">
					Any questions?
					<br /> We got you.
				</h3>
				<p className="text-sm text-white font-semibold">
					Have questions? No worries! At Ownify, we&apos;re here to help.
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
						What is Ownify?
					</AccordionTrigger>
					<AccordionContent>
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2" className="border-[#A6DBFF]">
					<AccordionTrigger className="font-semibold">
						What is Ownify?
					</AccordionTrigger>
					<AccordionContent>
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3" className="border-[#A6DBFF]">
					<AccordionTrigger className="font-semibold">
						What is Ownify?
					</AccordionTrigger>
					<AccordionContent>
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4" className="border-[#A6DBFF]">
					<AccordionTrigger className="font-semibold">
						What is Ownify?
					</AccordionTrigger>
					<AccordionContent>
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-5" className="border-[#A6DBFF]">
					<AccordionTrigger className="font-semibold">
						What is Ownify?
					</AccordionTrigger>
					<AccordionContent>
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default Faq;
