const { CQStyle, CQStyleGroup } = require("../../../../ez-aem/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Button Outline",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Default",
      "@cq:styleId": "button:no-outline",
    }),
    new CQStyle({
      "@cq:styleLabel": "Outline",
      "@cq:styleId": "button:outline",
    }),
  ]
})