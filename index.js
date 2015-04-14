/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-inuitcss',

  included: function(app) {
    var bower = app.bowerDirectory;

    this._super.included(app);

    app.import(bower + '/inuit-defaults/_settings.defaults.scss');
    app.import(bower + '/inuit-responsive-settings/_settings.responsive.scss');
    app.import(bower + '/inuit-functions/_tools.functions.scss');
    app.import(bower + '/inuit-mixins/_tools.mixins.scss');
    app.import(bower + '/inuit-responsive-tools/_tools.responsive.scss');
    app.import(bower + '/inuit-tools-widths/_tools.widths.scss');
    app.import(bower + '/inuit-normalize/_generic.normalize.scss');
    app.import(bower + '/inuit-reset/_generic.reset.scss');
    app.import(bower + '/inuit-box-sizing/_generic.box-sizing.scss');
    app.import(bower + '/inuit-shared/_generic.shared.scss');
    app.import(bower + '/inuit-page/_base.page.scss');
    app.import(bower + '/inuit-headings/_base.headings.scss');
    app.import(bower + '/inuit-lists/_base.lists.scss');
    app.import(bower + '/inuit-images/_base.images.scss');
    app.import(bower + '/inuit-layout/_objects.layout.scss');
    app.import(bower + '/inuit-clearfix/_trumps.clearfix.scss');
    
  }
};
