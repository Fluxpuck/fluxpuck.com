/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            height: {
                'px-900': '900px'
            },
            width: {
                'px-800': '800px'
            },
            colors: {
                'mac-body-light': '#eeebe6',
                'mac-body-dark': '#d8d4c9',
                'mac-screen-light': '#4d4c4f',
                'mac-screen-dark': '#37383a',
                'mac-disk-dark': '#d2ccc3',
            },
            backgroundImage: theme => ({
                'mac-disk-floppy': 'linear-gradient(#020108, #242524)',
            })
        },
    },
    plugins: [],
}