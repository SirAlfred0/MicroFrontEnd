const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "dashboard": "http://localhost:4201/main.js",
    "panel": "http://localhost:4202/main.js",
    "home": "http://localhost:4203/main.js",        
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    "auth": ({singleton: true, requiredVersion: '0', strictVersion: false}),
    "cross-tab-communication": ({singleton: true, requiredVersion: '0', strictVersion: false})
  },

});
