const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			transparent: "transparent",
			black: colors.black,
			white: colors.white,
			primary: colors.purple,
			secondary: colors.gray,
			error: colors.red,
			warning: colors.yellow,
			success: colors.green,
		},
		extend: {},
	},
	plugins: [],
};
