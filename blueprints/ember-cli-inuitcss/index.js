module.exports = {
  normalizeEntityName: function () {},

  afterInstall: function () {
    return this.addPackagesToProject([{ name: 'inuitcss' }]);
  },
};
