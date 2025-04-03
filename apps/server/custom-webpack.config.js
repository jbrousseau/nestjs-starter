const { composePlugins, withNx } = require('@nx/webpack')

// Nx plugins for webpack.
module.exports = composePlugins(withNx({target: 'node'}), (config) => {
    // https://github.com/nrwl/nx/issues/12108#issuecomment-1252576254
    config.plugins = config.plugins.filter((p) => p.constructor.name !== 'DefinePlugin');
    // Update the webpack config as needed here.
    // e.g. `config.plugins.push(new MyPlugin())`
    return config;
})