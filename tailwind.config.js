/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,vue,js}"],
    theme: {
        screens: {
            'sm': '480px',
            'md': '768px','lg': '1024px',
            'xl': '1440px',
        },
        extend: {
            colors: {
                teal : '#1eb8b8',
            },
            fontFamily: {
                'quicksand': ['Quicksand', 'sans-serif'],
        },
        container: {
            center: true,
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
}