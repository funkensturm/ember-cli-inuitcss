module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    this.addBowerPackageToProject('inuit-defaults');
    this.addBowerPackageToProject('inuit-responsive-settings');
    this.addBowerPackageToProject('inuit-functions');
    this.addBowerPackageToProject('inuit-mixins');
    this.addBowerPackageToProject('inuit-responsive-tools');
    this.addBowerPackageToProject('inuit-tools-widths');
    this.addBowerPackageToProject('inuit-normalize');
    this.addBowerPackageToProject('inuit-reset');
    this.addBowerPackageToProject('inuit-box-sizing');
    this.addBowerPackageToProject('inuit-shared');
    this.addBowerPackageToProject('inuit-page');
    this.addBowerPackageToProject('inuit-headings');
    this.addBowerPackageToProject('inuit-lists');
    this.addBowerPackageToProject('inuit-images');
    return this.addBowerPackageToProject('inuit-layout');
  }
};