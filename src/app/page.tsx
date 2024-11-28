import React from "react";
import Hero from "./components/hero";
import Capabilites from "./components/capabilities";
import Faq from "./components/faq";

const Page = () => {
	return (
		<main className="min-h-screen max-w-screen">
			<Hero />
			<Capabilites />
			<Faq />
		</main>
	);
};

export default Page;
