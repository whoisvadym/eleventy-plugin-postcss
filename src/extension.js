const Config = require('./config-loader');
const PostCSS = require('./post-css');

const OUTPUT_FILE_EXTENSION = 'css';

module.exports = {
  outputFileExtension: OUTPUT_FILE_EXTENSION,
  // Load the config with a default loader
  async init() { await Config.tryLoad(); },
  async compile(input, inputPath) {
    return async ({ page }) => {
      const plugins = Config.getPlugins();
      const config = Config.getProcessorConfig(inputPath, page.outputPath);

      return PostCSS.process(input, { plugins, config });
    };
  },
};
