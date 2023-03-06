/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/tailwind-datepicker-react/dist/**/*.js"],
  theme: {
    extend: {
      colors: {
        'ucn-blue': '#1344CE',
        'ucn-blue2': '#AFB7FA',
        'grey': '#C0CCDA',
      }
    },
  },
  plugins: [
    
]
};
