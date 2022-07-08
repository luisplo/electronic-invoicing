import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "react-feather";
import { setIn } from "final-form";
import { Form, Field } from "react-final-form";
import * as Yup from "yup";

export default function FormLogin() {
	const { t } = useTranslation();
	const [show, setShow] = useState(false);

	const schema = Yup.object({
		email: Yup.string(t("form.errors.login.string"))
			.required(t("form.errors.login.required"))
			.email(t("form.errors.login.invalid"))
			.max(60, t("form.errors.login.max", { count: 60 }))
			.min(5, t("form.errors.login.min", { count: 5 })),
		password: Yup.string(t("form.errors.login.string"))
			.required(t("form.errors.login.required"))
			.max(10, t("form.errors.login.max", { count: 10 }))
			.min(5, t("form.errors.login.min", { count: 5 })),
	});

	const validate = async (values) => {
		try {
			await schema.validate(values, { abortEarly: false });
		} catch (err) {
			const errors = err.inner.reduce((formError, innerError) => {
				return setIn(formError, innerError.path, innerError.message);
			}, {});

			return errors;
		}
	};

	const onSubmit = (values) => {
		console.log("values: ", values);
	};

	function tooglePassword() {
		if (show === false) {
			setTimeout(() => {
				setShow(false);
			}, 10000);
		}
		setShow(!show);
	}

	return (
		<Form
			onSubmit={onSubmit}
			validate={validate}
			render={({ handleSubmit, form, submitting, pristine, values }) => (
				<form onSubmit={handleSubmit}>
					<div className="flex m-2">
						<div className="grid grid-flow-row auto-rows-max gap-y-5">
							<label className="text-center mb-5 capitalize text-white font-semibold text-2xl">
								{t("login.title")}
							</label>
							<Field name="email">
								{({ input, meta }) => (
									<div className="xl:w-80">
										<label
											htmlFor="email"
											className="form-label inline-block mb-2 text-white capitalize"
										>
											{t("login.email")}
										</label>
										<input
											{...input}
											type="text"
											className="form-control block w-full px-3 py-1.5 text-white bg-primary-800 bg-clip-padding border border-solid border-primary-400 rounded transition ease-in-out m-0 focus:text-white focus:bg-primary-900 focus:border-white focus:outline-none"
											id="email"
											placeholder={t("login.email-example")}
										/>
										{meta.error && meta.touched && (
											<span className="text-error-400 normal-case text-sm mt-1">
												{meta.error}
											</span>
										)}
									</div>
								)}
							</Field>
							<Field name="password">
								{({ input, meta }) => (
									<div className="xl:w-80">
										<label
											htmlFor="password"
											className="form-label inline-block mb-2 text-white capitalize"
										>
											{t("login.password")}
										</label>
										<div className="relative">
											<input
												{...input}
												type={show === false ? "password" : "text"}
												className="form-control block w-full px-3 py-1.5 text-white bg-primary-800 bg-clip-padding border border-solid border-primary-400 rounded transition ease-in-out m-0 focus:text-white focus:bg-primary-900 focus:border-white focus:outline-none"
												id="password"
												placeholder={t("login.password-example")}
												autoComplete="on"
											/>
											<div className="absolute top-2 right-5">
												{show === false ? (
													<Eye
														className="stroke-primary-400"
														onClick={tooglePassword}
													/>
												) : (
													<EyeOff
														className="stroke-primary-400"
														onClick={tooglePassword}
													/>
												)}
											</div>
										</div>
										{meta.error && meta.touched && (
											<span className="text-error-400 normal-case text-sm mt-1">
												{meta.error}
											</span>
										)}
									</div>
								)}
							</Field>

							<div className="w-full flex justify-center">
								<button
									type="submit"
									className="w-56 inline-block mt-5 px-10 py-2.5 bg-white text-primary-900 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-primary-200 hover:shadow-lg transition duration-150 ease-in-out"
								>
									{t("login.button")}
								</button>
							</div>
							<div className="flex justify-center mt-2">
								<Link to="forget-password" className="text-white normal-case">
									{t("login.forget-password")}
								</Link>
							</div>
						</div>
					</div>
				</form>
			)}
		/>
	);
}
