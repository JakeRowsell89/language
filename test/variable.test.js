const test = require('ava')
const fs = require('fs')
const app = require('../index.js')

test('Expect variable input to match expected output', test => {
  fs.readFile('./samples/variable.lang', 'utf-8', function (e, input) {
    test.is(app(e, input), '"27yo soy string"')
  })
})

test('Expect numbers to add up', test => {
  const runWithInput = app(null, '+ 1 2 3')
  console.log(runWithInput)
  test.is(runWithInput, 6)
})
