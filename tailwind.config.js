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
                'mac': '760px',
                'mac-body': '620px',
                'mac-disk': '20px',
                'mac-footer': '120px',
                '90': '90%'
            },
            width: {
                'mac': '680px',
                '90': '90%'
            },
            colors: {
                'mac-body-light': '#eeebe6',
                'mac-body-dark': '#d8d4c9',
                'mac-screen-light': '#4d4c4f',
                'mac-screen-dark': '#37383a',
                'mac-disk-dark': '#d2ccc3',
            },
            backgroundImage: theme => ({
                'mac-gradient': 'linear-gradient(#eeebe6, #d8d4c9)',
            }),
            boxShadow:{
                'mac-body': 'inset 0 -2px 4px -2px whitesmoke',
                'mac-disk': 'inset 0px 2px 2px 0px darkgray',
                'mac-footer': 'inset 0px 3px 5px -3px whitesmoke'
            },
            gridTemplateRows: {
                // Simple 8 row grid
                '10': 'repeat(10, minmax(0, 1fr))',
                // Complex site-specific row configuration
                'layout': '200px minmax(900px, 1fr) 100px',
            },
            gridRowEnd: {
                '9':  '9'
            }
        },
    },
    plugins: [],
}