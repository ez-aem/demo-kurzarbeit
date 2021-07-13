module.exports = {
  presets: [require("./ez-aem/tailwind.config")],
  theme: {
    extend: {
      fontSize: {
        var: "var(--font-size)",
      },
      colors: {
        light: {
          ":root": {
            fillAccent: "#0073aa",
            fillAccentHover: "005177",
          },
          primary: {
            fill: "rgb(226, 0, 26)",
            fillHover: "rgb(226, 0, 26)",
          },
          secondary: {
            fill: "rgba(239, 123, 62)",
            fillHover: "rgba(239, 123, 62)",
          },
          white: {
            fillAccent: "#e2001a",
            fillAccentHover: "#0073aa",
          },
          light: {
            fill: "#c6c6c6",
            fillHover: "#c6c6c6",
            fillAccent: "#0073aa",
            fillAccentHover: "#005177",

          },
          dark: {
            fill: "rgba(82, 83, 83)",
            fillHover: "rgba(82, 83, 83)",
          }
        }
      }
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: true,
    content: [
      "./src/styles/index.json",
      "./src/template/policies.json",
      "./src/components/**/**/*.js",
      "./src/components/**/**/*.css",
      "./src/site/js/*.js",
      "./src/site/css/*.css",
      "./src/styles/index.json",
    ],
    css: ["./src/main.css"],
  },
};
