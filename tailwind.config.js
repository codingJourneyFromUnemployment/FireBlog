/** @type {import('tailwindcss').Config} */
export default {
    mode: "jit",
    content: ["./src/**/*.{html,vue,js}"],
    theme: {
        screens: {
            'sm': '480px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1440px',
        },
        extend: {
            colors: {
                teal : '#1eb8b8',
                char : '#303030',
            },
            fontFamily: {
                'quicksand': ['Quicksand', 'sans-serif'],
            },
            container: {
                center: true,
            },
            flex: {
                '4' : '4 4 0%',
                '3' : '3 3 0%',
            }
        },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
}