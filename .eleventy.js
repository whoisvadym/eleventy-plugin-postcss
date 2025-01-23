import Extension from "./src/extension.js";

export const SUPPORTED_FORMATS_LIST = ["css", "postcss", "pcss"];

export default async function EleventyPluginPostCSS(config) {
  SUPPORTED_FORMATS_LIST.forEach((format) => {
    // Add template formats that will be processed by this plugin
    config.addTemplateFormats(format);

    // Add an extension per each supported format)
    config.addExtension(format, Extension);
  });
}
