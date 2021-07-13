const { CQStyleGroups } = require("../../../../ez-aem/styles/index")

module.exports = new CQStyleGroups([
  require("./presets"),
  ...require("../../_common/styles/index"),
  require("./actions"),
])