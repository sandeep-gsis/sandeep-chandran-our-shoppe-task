/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        maxWidth: {
            '8xl': '1320px',
        },
        // container: {
        //     screens: {
        //         sm: '600px',
        //         md: '728px',
        //         lg: '984px',
        //         xl: '1240px',
        //         '8xl': '1320px',
        //     },
        // },
        extend: {
            colors: {
                'shopee-purple': '#7D23C7',
                'shopee-blue': '#320D9A',
                orange: '#F2994A',
            },
        },
    },
    plugins: [],
}