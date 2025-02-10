# Eleventy plugin for Postcss
A small plugin for [@11ty/eventy](https://www.11ty.dev/) that enables the support for [PostCSS](https://postcss.org/) pre-processor in you eleventy project.

## Requirements
- `node@^18.0.0`
- `@11ty/eleventy@^3.0.0`

## Features
- 😌 Simple. Easy to install, requires minimum configuration.
- ⭐️ Modern. Compatible with the most recent major eleventy version.
- 🗂 Flexible. Supports the following file extensions: `.css`, `.postcss`, `.pcss`.
- ⚙️ Configurable. Supports PostCSS configuration via `postcss.config.js` file. ([more info](#configuration))

## Usage
1. Install: `npm install --save-dev eleventy-plugin-postcss`
2. Add the following lines to the `.eleventy.js`:
```js
// Import (ES6 modules)
import PostCSSPlugin from "eleventy-plugin-postcss";

export default function (eleventyConfig) {
    // Enable the plugin in you project
    eleventyConfig.addPlugin(PostCSSPlugin);
}
```
OR
```js
// CommonJS 
module.exports = async (eleventyConfig) => {
    // Since the plugin is ESM, use `await import` => Requires to use .default
    const PostCSSPlugin = await import("eleventy-plugin-postcss");
    // Enable the plugin in you project
    eleventyConfig.addPlugin(PostCSSPlugin.default);
}
```

## Configure PostCSS
Create a `postcss.config.js` config file for additional configuration. ([more info](#configuration)). Example:
```js
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
```

## Configuration
To load and resolve the configuration file the plugin uses [`postcss-load-config`](https://github.com/postcss/postcss-load-config) module. Check out the project [readme](https://github.com/postcss/postcss-load-config#readme) for the complete list of supported config file formats.

## Contribute
Feel free to open a Github issue for suggestions, bug reports, feature requests.
