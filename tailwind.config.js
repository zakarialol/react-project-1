/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/*.jsx","*.html","./src/*.jsx"],
  theme: {
    extend: {
      fontFamily:{
        poppins:["Poppins","sans-serif"]
      }
    },
  },
  plugins: [],
}

