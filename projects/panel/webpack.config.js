const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'panel',
  filename: 'remoteEntry.js',

  exposes: {
    './panel': './projects/panel/src/app/app.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    "auth": ({singleton: true, requiredVersion: '0', strictVersion: false})
  },

});
