const { CQStyle, CQStyleGroup } = require("../../../../ez-aem/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Presets",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Navbar",
      "@cq:styleId": "container:navbar",
    }),
    new CQStyle({
      "@cq:styleLabel": "Hero",
      "@cq:styleId": "container:hero",
    }),
  ]
})