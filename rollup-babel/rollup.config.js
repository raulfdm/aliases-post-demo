import babel from "@rollup/plugin-babel";
import path from "path";

export default {
  input: "src/index.js",
  output: {
    format: "cjs",
    dir: "dist",
  },
  plugins: [
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env"],
      plugins: [
        [
          // Your aliases will be under this module
          "babel-plugin-module-resolver",
          {
            root: ["./src"],
            alias: {
              helpers: path.resolve(__dirname, "src/helpers/"),
              models: path.resolve(__dirname, "src/models/"),
            },
          },
        ],
      ],
    }),
  ],
};
