import { Metadata } from "next";

const TITLE = "Twiftify - Link Your NFTs with Your X Profile";
const DESCRIPTION =
	"Showcase your NFTs on X! Link your digital assets with your X profile and share your NFT collection with the world. Twiftify connects Web3 with social media seamlessly.";

const PREVIEW_IMAGE_URL =
	"https://res.cloudinary.com/dlu7jj0qk/image/upload/v1733052162/avatar/bkojhvzywub7lvqq7old.png";
const ALT_TITLE = "Twiftify: Decentralized NFT Sharing Made Seamless";
const BASE_URL = "https://twiftify.twonoobs.tech";

export const siteConfig: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	icons: {
		icon: "/favicon.ico",
	},
	applicationName: "Twiftify",
	creator: "DavidGoyal",
	twitter: {
		creator: "@David__Goyal",
		title: TITLE,
		description: DESCRIPTION,
		card: "summary_large_image",
		images: [
			{
				url: PREVIEW_IMAGE_URL,
				width: 1200,
				height: 630,
				alt: ALT_TITLE,
			},
		],
	},
	openGraph: {
		title: TITLE,
		description: DESCRIPTION,
		siteName: "Twiftify",
		url: BASE_URL,
		locale: "en_US",
		type: "website",
		images: [
			{
				url: PREVIEW_IMAGE_URL,
				width: 1200,
				height: 630,
				alt: ALT_TITLE,
			},
		],
	},
	category: "NFT",
	alternates: {
		canonical: BASE_URL,
	},
	keywords: [
		"NFT",
		"X Profile",
		"Social Media",
		"Twiftify",
		"Web3",
		"Digital Assets",
		"NFT Sharing",
		"Blockchain",
	],
	metadataBase: new URL(BASE_URL),
};
