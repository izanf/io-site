import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        aboutImage: "url('/images/about-bg.png')",
        speakersBg: "url('/images/speakers-bg.png')"
      },
      colors: {
        lightGrey: '#eeeeee',
        royalBlue: '#2563EB',
        black: '#202124',
        blackHover: '#18181B',
        linearFirstStart: '#3A7AED',
        linearFirstEnd: '#319E4F',
        linearSecondStart: '#319E4F',
        linearSecondEnd: '#FFCB32',
        linearThirdStart: '#FFCB32',
        linearThirdEnd: '#F15E33',
        linearFourthStart: '#E63D33',
        linearFourthEnd: '#9461CA'
      },
      fontFamily: {
        body: 'Google Sans'
      }
    },
  },
  plugins: [],
};
export default config;
