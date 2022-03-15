# Eleventy plugin for Postcss
A small plugin for [@11ty/eventy](https://www.11ty.dev/) that enables the support for [PostCSS](https://postcss.org/) pre-processor in you eleventy project.

## Requirements
- `@11ty/eleventy@^1.0.0`

## Features
- 😌 Simple. Easy to install, requires minimum configuration.
- ⭐️ Modern. Compatible with the most recent major eleventy version.
- 🗂 Seamless. Supports the following file extensions: `.css`, `.postcss`, `.pcss`.
- ⚙️ Configurable. Supports PostCSS configuration via `.postcssrc` file.

## Usage
1. Install: `npm install --save-dev eleventy-plugin-postcss`
2. Add the following lines to the `.eleventy.js`:
```js
// Import the plugin
const PostCSSPlugin = require("eleventy-plugin-postcss");

module.exports = (config) => {
    // Enable the plugin in you project
    config.addPlugin(PostCSSPlugin);
}
```
3. (Optional) Create a `.postcssrc.{json,yml}` config file for additional configuration.

## Contribute
Feel free to open a Github issue for suggestions, bug reports, feature requirements.