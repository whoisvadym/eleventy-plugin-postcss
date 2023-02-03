const EleventyPostCSSPlugin = require("../.eleventy.js");

module.exports = function (config) {
    // Enable the plugin
    config.addPlugin(EleventyPostCSSPlugin, { ignorePattern: /^_/});
}