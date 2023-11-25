const config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "dark-slate-gray": "#2b4141ff",
                'periwinkle': "#d4dcffff",
                "indian-red": "#d16666ff",
                "black-bean": "#440d0fff",
                "caput-mortuum": "#551b14ff",
            },
        },
        fontFamily: {
            logo: ["Lobster", "Josefin Slab"],
        },
    },
    plugins: [],
};
export default config;
