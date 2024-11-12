// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         merinda:["Merienda, cursive"],
//         cur:["Tangerine, cursive"],
//         roboto:["Roboto Slab, serif"]
//       },
//       colors: {
//         'rosepink' : '#fb7185',
//         'green' : '#32cd32',
//       }
//     },
    
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merinda: ["Merienda, cursive"],
        cur: ["Tangerine, cursive"],
        roboto: ["Roboto Slab, serif"]
      },
      colors: {
        rosepink: '#fb7185',
        green: '#32cd32',
      },
    },
  },
  plugins: [],
}
