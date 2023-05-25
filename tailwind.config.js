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
                char_rgba : 'rgba(48, 48, 48, 0.8)',
                modal_bg : 'rgba(0, 0, 0, 0.7)',
            },
            fontFamily: {
                'quicksand': ['Quicksand', 'sans-serif'],
            },
            container: {
                center: true,
            },
            flex: {
                '1' : '1 1 0%',
                '2' : '2 2 0%',
                '4' : '4 4 0%',
                '3' : '3 3 0%',
            },
            borderColor:['focus', 'focus-visible'],
            display: {
                'initial': 'initial',
            },
            height: {
                '60vh': '60vh',
            },
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}