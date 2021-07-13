const { CQStyle, CQStyleGroup } = require("../../../../ez-aem/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Action Style",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Link",
      "@cq:styleId": "download--action:link",
    }),
    new CQStyle({
      "@cq:styleLabel": "Button",
      "@cq:styleId": "download--action:button",
    }),
  ]
})