module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'inuit-defaults' },
      { name: 'inuit-responsive-settings' },
      { name: 'inuit-functions' },
      { name: 'inuit-mixins' },
      { name: 'inuit-responsive-tools' },
      { name: 'inuit-tools-widths' },
      { name: 'inuit-normalize' },
      { name: 'inuit-reset' },
      { name: 'inuit-box-sizing' },
      { name: 'inuit-shared' },
      { name: 'inuit-page' },
      { name: 'inuit-headings' },
      { name: 'inuit-lists' },
      { name: 'inuit-images' },
      { name: 'inuit-layout' },
      { name: 'inuit-clearfix' }
    ]);
  }
};