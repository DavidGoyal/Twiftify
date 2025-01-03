import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WalletAdapterProvider from "@/providers/wallet-adapter-provider";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/config/site-config";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = siteConfig;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<WalletAdapterProvider>
				<body
					className={`${geistSans.variable} ${geistMono.variable} ${montserrat.className} antialiased bg-[#111314]`}
				>
					<Header />
					{children}
					<Footer />
					<Toaster position="bottom-right" />
				</body>
			</WalletAdapterProvider>
		</html>
	);
}
