const keywords = require('./keywords.js')

function tokenise (lexed) {
  let i = 0
  let tokens = []

  while (i < lexed.length) {
    let word = lexed[i]

    if (isKeyword(word)) {
      const action = keywords(word)
      tokens.push(action)
    } else {
      tokens.push(word)
    }

    i++
  }

  return tokens
}

function isKeyword (word) {
  return !!keywords(word)
}

module.exports = tokenise
