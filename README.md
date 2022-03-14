# Eleventy plugin for Postcss
A small plugin for [@11ty/eventy](https://www.11ty.dev/) that enables the support for [PostCSS](https://postcss.org/) pre-processor in you eleventy project.

## Requirements
- `@11ty/eleventy@^1.0.0`

## Features
- [x] 😌 Simple. Easy to install, requires minimum configuration.
- [x] ⭐️ Modern. Compatible with the most recent major eleventy version.
- [x] 🗂 Seamless. Supports the following file extensions: `.css`, `.postcss`, `.pcss`.
- [x] ⚙️ Configurable. Supports PostCSS configuration via `.postcssrc` file.

## Usage
1. Install via npm `npm install eleventy-plugin-postcss`
2. Add the following line to your `.eleventy.js`:
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
Feel free to open a github issue for any suggestions, bug reports, feature requirements.

## Keywords
