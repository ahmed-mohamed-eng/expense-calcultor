module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        blue: "2px solid #0000ff",
      },
      width: {
        100: "27rem",
        102: "30rem",
        104: "33rem",
        106: "36rem",
        107: "39rem",
        108: "42rem",
        109: "45rem",
        110: "48rem",
      },
      height: {
        100: "27rem",
        102: "30rem",
        104: "33rem",
        106: "36rem",
        107: "39rem",
        108: "42rem",
        109: "45rem",
        110: "48rem",
      },
    },
  },
  variants: {
    extend: {
      margin: ["last"],
    },
  },
  plugins: [],
};
