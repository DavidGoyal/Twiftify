import React from "react";

const Footer = () => {
	return (
		<footer className="w-full h-32 bg-[#1E262B] flex justify-between items-center p-6">
			<div className="flex gap-8 h-full items-center">
				<div>
					<h3 className="text-2xl font-bold text-[#D4B844]">Ownify</h3>
				</div>
				<p className="h-full border-white border-[1px]" />
				<p className="text-[#A6DBFF] text-sm font-semibold">
					© 2024 Ownify. All rights reserved.
				</p>
			</div>

			<div className="h-full flex flex-col items-start justify-center gap-2">
				<div className="flex gap-6">
					<a href={"https://twitter.com/Ownify"} target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-twitter text-[#A6DBFF] fill-[#A6DBFF]"
						>
							<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
						</svg>
					</a>
					<a href={"https://twitter.com/Ownify"} target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-mail text-[#A6DBFF]"
						>
							<rect width="20" height="16" x="2" y="4" rx="2" />
							<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
						</svg>
					</a>
					<a href={"https://twitter.com/Ownify"} target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-linkedin text-[#A6DBFF] fill-[#A6DBFF]"
						>
							<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
							<rect width="4" height="12" x="2" y="9" />
							<circle cx="4" cy="4" r="2" />
						</svg>
					</a>
				</div>
				<p className="text-[#A6DBFF] text-sm font-semibold">
					Support: ownify@gmail.com
				</p>
			</div>
		</footer>
	);
};

export default Footer;
