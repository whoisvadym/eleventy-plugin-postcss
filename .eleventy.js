// eslint-disable-next-line no-unused-vars, import/no-extraneous-dependencies
const EleventyConfig = require('@11ty/eleventy/src/UserConfig');
const extension = require('./src/extension');
const pkg = require('./package.json');
const { DEFAULT_PLUGIN_OPTIONS } = require('./src/plugin-options');

const SUPPORTED_FORMATS_LIST = ['css', 'postcss', 'pcss'];

/**
 * Validates the eleventy version.
 * @param {EleventyConfig} config
 */
function validateEleventyVersion(config) {
  try {
    config.versionCheck(pkg['11ty'].compatibility);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(`WARN: Eleventy Plugin (${pkg.name}) Compatibility: ${e.message}`);
  }
}

/**
 *
 * @param {EleventyConfig} config
 */
module.exports = function EleventyPluginPostCSS(
  config,
  pluginOptions = DEFAULT_PLUGIN_OPTIONS,
) {
  validateEleventyVersion(config);

  SUPPORTED_FORMATS_LIST.forEach((format) => {
    // Add template formats that will be processed by this plugin
    config.addTemplateFormats(format);

    // Add an extension per each supported format)
    config.addExtension(format, extension(pluginOptions));
  });
};
