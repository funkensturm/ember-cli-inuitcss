'use strict';

module.exports = {
  name: 'ember-cli-inuitcss',
  included: function(app) {
    var includePaths = [
      'node_modules'
    ];

    if (!app.options.sassOptions) {
      app.options.sassOptions = {};
    }

    if (app.options.sassOptions.includePaths) {
      app.options.sassOptions.includePaths.concat(includePaths);
    } else {
      app.options.sassOptions.includePaths = includePaths;
    }

    this._super.included(app);
  }
};
