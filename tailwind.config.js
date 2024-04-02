/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'island-moments': ['Island Moments', 'sans-serif'],
            },

        },
    },
    plugins: [
        require("daisyui"),
        function ({addUtilities}) {
            const newUtilities = {
                '.no-scrollbar::-webkit-scrollbar': {
                    'display': 'none',
                },
                '.no-scrollbar': {
                    "-ms-overflow-style": "none",
                    "scrollbar-width": "none"
                },
            };
            addUtilities(newUtilities)
        }
    ],
    daisyui: {
        themes: "pastel",
        darkTheme: "dark",
        base: true,
        styled: true,
        utils: true,
        prefix: "",
        logs: true,
        themeRoot: ":root",
    },
}