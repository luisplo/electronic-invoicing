import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className="flex h-screen">
			<div className="grid grid-rows-3 mx-auto content-between">
				<div className="flex items-center justify-center row-start-2">
					<div className="grid grid-rows-2">
						<span className="text-3xl">Page Not Found</span>
						<span className="text-2xl font-semibold text-center">404</span>
					</div>
				</div>
				<div className="flex items-end justify-center row-span-3 mb-10">
					<Link to="/">Redirect to Home</Link>
				</div>
			</div>
		</div>
	);
}
