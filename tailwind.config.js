module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      borderRadius: {
        button: '9999px', // !rounded-button 用
      },
    },
  },
  plugins: [],
};
