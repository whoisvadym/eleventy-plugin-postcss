const postcss = require("postcss");

module.exports = {
    async process(css, {plugins, config = {}}) {
        return postcss(plugins).process(css, config).then(result => result.css);
    }
}