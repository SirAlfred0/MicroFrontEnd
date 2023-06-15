const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'home',
  filename: 'remoteEntry.js',

  exposes: {
    './home': './projects/home/src/app/app.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    "auth": ({singleton: true, requiredVersion: '0', strictVersion: false}),
    "cross-tab-communication": ({singleton: true, requiredVersion: '0', strictVersion: false})
  },

});
