const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'dashboard',
  filename: 'remoteEntry.js',

  exposes: {
    './dashboard': './projects/dashboard/src/app/app.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    "auth": ({singleton: true, requiredVersion: '0', strictVersion: false}),
    "cross-tab-communication": ({singleton: true, requiredVersion: '0', strictVersion: false})
  },

});
