const lexer = require('./lib/lexer.js')
const tokenise = require('./lib/tokeniser.js')
const parse = require('./lib/parser.js')

function init (e, input) {
  console.log(input)
  const script = input.trim()
  const lexed = lexer(script)
  const tokens = tokenise(lexed)
  const result = parse(tokens)
  console.log(result)
  return result
}

module.exports = init
