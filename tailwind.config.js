export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "Arial", "sans-serif"],
      },
      colors: {
        paper: "#f7f6f1",
        ink: "#171717",
        muted: "#74736d",
        sage: "#657d69",
        rule: "#deded8",
      },
    },
  },
  plugins: [],
};
