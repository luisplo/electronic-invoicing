import { useTranslation } from "react-i18next";

export default function Welcome() {
	const { t } = useTranslation();

	return (
		<div className="flex h-screen">
			<div className="grid grid-rows-3 mx-auto content-between">
				<div className="flex items-center justify-center row-start-2">
					<div className="grid grid-rows-2">
						<span className="text-5xl">{t("welcome.title")}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
