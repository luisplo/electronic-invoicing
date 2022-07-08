import Welcome from "./Welcome";
import FormLogin from "../components/login/Form";
export default function Login() {
	return (
		<div className="flex h-screen w-screen">
			<div className="grid grid-cols-3 h-full w-full">
				<div className="col-span-2">
					<Welcome />
				</div>
				<div className="bg-primary-800">
					<div className="flex h-screen">
						<div className="m-auto">
							<FormLogin />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
