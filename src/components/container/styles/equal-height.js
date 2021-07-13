const { CQStyle, CQStyleGroup } = require("../../../../ez-aem/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Equal Height Children",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Equal Height Children",
      "@cq:styleId": "equal-height",
    }),
    new CQStyle({
      "@cq:styleLabel": "Automatic Height Children",
      "@cq:styleId": "auto-height",
    }),
  ]
})