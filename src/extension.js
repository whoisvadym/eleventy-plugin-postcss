const path = require('path');
const Config = require('./config-loader');
const PostCSS = require('./post-css');
const { DEFAULT_PLUGIN_OPTIONS } = require('./plugin-options');

const OUTPUT_FILE_EXTENSION = 'css';

module.exports = (pluginOptions = DEFAULT_PLUGIN_OPTIONS) => ({
  outputFileExtension: OUTPUT_FILE_EXTENSION,
  // Load the config with a default loader
  async init() { await Config.tryLoad(); },
  async compile(input, inputPath) {
    return async ({ page }) => {
      if (
        pluginOptions.ignorePattern !== false
        && path.basename(page.inputPath).match(pluginOptions.ignorePattern)
      ) {
        return Promise.resolve();
      }
      const plugins = Config.getPlugins();
      const config = Config.getProcessorConfig(inputPath, page.outputPath);

      return PostCSS.process(input, { plugins, config });
    };
  },
});
