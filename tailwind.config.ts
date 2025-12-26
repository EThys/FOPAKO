import type { Config } from 'tailwindcss'

export default <Config>{
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    900: '#1b4b4a', // Deep Teal
                    800: '#2c7877', // Dark Teal
                    700: '#3ca4a3', // FOPAKO Primary Teal
                    600: '#52b8b7', // Vibrant Teal
                    500: '#78caca',
                    100: '#f0fcfc',
                    50: '#f7fdfd',
                    gold: '#3ca4a3' // Consistency with primary color
                }
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            }
        }
    },
    plugins: [],
}
