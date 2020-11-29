import alias from "@rollup/plugin-alias";
import path from "path";

export default {
  input: "src/index.js",
  output: {
    format: "cjs",
    dir: "dist",
  },
  plugins: [
    alias({
      /**
       * For custom files extension you might want to add "customerResolver"
       * https://github.com/rollup/plugins/tree/master/packages/alias#custom-resolvers
       *
       * By doing that this plugin can read different kind of files.
       */
      entries: [
        {
          find: "models",
          replacement: path.resolve(__dirname, "src/models"),
        },
        {
          find: "helpers",
          replacement: path.resolve(__dirname, "src/helpers"),
        },
      ],
    }),
  ],
};
