import React from "react";

export default function Loader({ size = 24, color = "gray-900" }) {
	return (
		<div className="flex h-screen">
			<div className="flex items-center justify-center m-auto">
				<div
					style={{ width: size, height: size }}
					className={`border-l-2 border-${color} rounded-full animate-spin`}
				></div>
			</div>
		</div>
	);
}
