import EleventyPostCSSPlugin from "../.eleventy.js";

/**
 * 
 * @param {import("@11ty/eleventy/src/UserConfig.js").default} config 
 */
export default function (config) {
  // Enable the plugin
  config.addPlugin(EleventyPostCSSPlugin);
}
