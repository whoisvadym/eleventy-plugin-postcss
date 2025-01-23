import mixins from "postcss-mixins";
import nested from "postcss-nested";
import preset from "postcss-preset-env";

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    mixins(),
    nested(),
    preset({ stage: "0" })
  ]
}

export default config;