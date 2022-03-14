const postcssrc = require("postcss-load-config");

/**
 * Loads and stores post-css config from ".postcssrc"
 */
class Config {
    constructor() {
        this._plugins = [];
        this._options = {};
    }

    async tryLoad(loader = postcssrc) {
        try {
            const { plugins, options } = await loader();

            this._plugins = plugins;
            this._options = options;
        } catch (e) {
            console.log(e);
        }
    }

    getPlugins() {
        return this._plugins;
    }

    getOptions() {
        return this._options;
    }

    getProcessorConfig(from, to) {
        return { ...this._options, from, to };
    }
}

module.exports = new Config();