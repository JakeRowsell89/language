const app = require('./index.js')
const fs = require('fs')

fs.readFile('./samples/variable.lang', 'utf-8', app)
