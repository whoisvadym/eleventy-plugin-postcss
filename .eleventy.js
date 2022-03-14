const pkg = require("./package.json");
const EleventyConfig = require("@11ty/eleventy/src/UserConfig");
const Extension = require("./src/extension");

const SUPPORTED_FORMATS_LIST = ["css", "postcss", "pcss"];

/**
 * Validates the eleventy version.
 * @param {EleventyConfig} config 
 */
function validateEleventyVersion(config) {
    try {
        config.versionCheck(pkg["11ty"].compatibility);
    } catch(e) {
        console.log( `WARN: Eleventy Plugin (${pkg.name}) Compatibility: ${e.message}` );
    }
}

/**
 * 
 * @param {EleventyConfig} config 
 */
module.exports = function EleventyPluginPostCSS (config) {
    validateEleventyVersion(config);

    SUPPORTED_FORMATS_LIST.forEach(format => {
         // Add template formats that will be processed by this plugin
         config.addTemplateFormats(format);

         // Add an extension per each supported format)
         config.addExtension(format, Extension);
    });
}