const { CQStyle, CQStyleGroup } = require("../../../../ez-aem/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Presets",
  "cq:styles": [
    // new CQStyle({
    //   "@cq:styleLabel": "Preset Name",
    //   "@cq:styleId": "carousel--preset:preset-name",
    // }),
  ]
})