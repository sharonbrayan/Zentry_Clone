/**@type {import('tailwindcss').Config}*/
export default {

    // FIX 1: Correct the content array syntax
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // CORRECT: Use {} for extensions
],

    theme: {
        extend: {
            fontFamily:
            {

                zentry: ['zentry', 'sans-serif'],

                general: ['general', 'sans-serif'],

                'circular-web': ['circular-web', 'sans-serif'],

                'robert-medium': ['robert-medium', 'sans-serif'],

                'robert-regular': ['robert-regular', 'sans-serif'],

            }

        }
    },

    plugins: [],
}
