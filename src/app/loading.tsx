import React from "react";

const Loading = () => {
	return (
		<div className="w-screen min-h-[80vh] flex justify-center items-center">
			<div className="loader border-t-transparent border-white border-4 rounded-full h-[8vw] w-[8vw] animate-spin" />
		</div>
	);
};

export default Loading;
