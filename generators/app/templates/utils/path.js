const path = require('path')

const sourceDir = path.resolve('./src/')
const entry = path.resolve(sourceDir, './main.js')
const outputDir = path.resolve('./dist')
const templateDir = path.resolve('./public/')
const template = path.resolve(templateDir, './index.html')

module.exports = {
    sourceDir,
    entry,
    outputDir,
    templateDir,
    template
}
