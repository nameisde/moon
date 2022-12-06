/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            sans: ['Inter', ...defaultTheme.fontFamily.sans],
        },
        colors: {
            'moon': 'hsl(0, 0%, 9%, 1)',
            'moon-default': 'hsl(0, 0%, 14%, 1)',
            'moon-hover': 'hsl(0, 0%, 31%, 1)',
            'moon-outline-default': 'hsl(0, 0%, 24%, 1)',
            'moon-outline-hover': 'hsl(0, 0%, 31%, 1)',
            'moon-text-default': 'hsl(0, 0%, 63%, 1)',
            'moon-text-hover': 'hsl(0, 0%, 93%, 1)',
        }
    },
    plugins: [
    
    ],
}

