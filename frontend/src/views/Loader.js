import React from "react";

export default function Loader() {
	return (
		<div className="flex h-screen">
			<div className="flex items-center justify-center m-auto">
				<div className="w-24 h-24 border-l-2 border-primary-800 rounded-full animate-spin"></div>
			</div>
		</div>
	);
}
