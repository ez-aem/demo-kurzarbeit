const plugin = require('tailwindcss/plugin')
const { resolve } = require('path')
const { writeFileSync } = require('fs')

module.exports = (stylesPath) => plugin(({ addBase, theme }) => {
  const styleDefs = require(resolve(process.cwd(), stylesPath))
  const styles = {};
  for (let component in styleDefs) {
    styles[component] = styleDefs[component].format();
  }
  writeFileSync(`./src/styles/index.json`, JSON.stringify(styles, null, 2))
})