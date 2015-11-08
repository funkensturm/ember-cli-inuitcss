module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'inuit-box-sizing' },
      { name: 'inuit-clearfix' },
      { name: 'inuit-defaults' },
      { name: 'inuit-functions' },
      { name: 'inuit-headings' },
      { name: 'inuit-headings-trumps' },
      { name: 'inuit-images' },
      { name: 'inuit-layout' },
      { name: 'inuit-lists' },
      { name: 'inuit-mixins' },
      { name: 'inuit-normalize' },
      { name: 'inuit-page' },
      { name: 'inuit-paragraphs' },
      { name: 'inuit-reset' },
      { name: 'inuit-responsive-settings' },
      { name: 'inuit-responsive-tools' },
      { name: 'inuit-shared' },
      { name: 'inuit-spacing' },
      { name: 'inuit-spacing-responsive' },
      { name: 'inuit-tools-widths' },
      { name: 'inuit-widths' },
      { name: 'inuit-widths-responsive' }
    ]);
  }
};