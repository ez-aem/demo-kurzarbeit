const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Presets",
  "cq:styles": [
    // new CQStyle({
    //   "@cq:styleLabel": "Preset Name",
    //   "@cq:styleId": "text--preset:preset-name",
    // }),
  ]
})