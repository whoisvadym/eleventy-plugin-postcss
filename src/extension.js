import postcss from "postcss";
import Config from "./config-loader.js";

const OUTPUT_FILE_EXTENSION = "css";

const process = async (css, { plugins, config = {} }) =>
  postcss(plugins)
    .process(css, config)
    .then((result) => result.css);

export default {
  outputFileExtension: OUTPUT_FILE_EXTENSION,
  // Load the config with a default loader
  async init() {
    await Config.tryLoad();
  },
  async compile(input, inputPath) {
    return async ({ page }) => {
      const plugins = Config.getPlugins();
      const config = Config.getProcessorConfig(inputPath, page.outputPath);

      return process(input, { plugins, config });
    };
  },
};
