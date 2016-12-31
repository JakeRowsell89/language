function lexer (input) {
  let i = 0
  let lexed = []
  let str = ''
  let insideString = false

  while (i < input.length) {
    const char = input[i]

    if (!insideString && (char === '\n' || char === ' ')) {
      if (/[0-9]/.test(str[0])) {
        lexed.push(Number(str))
      } else {
        lexed.push(str)
      }

      if (char === '\n' && str.length) { // Add max 1 end-of-line marker
        lexed.push('\n')
      }

      str = ''
    } else {
      if (char === '"') {
        insideString = !insideString
      }
      str += char
    }

    i++
  }

  lexed.push(str)

  return lexed.filter(word => word !== '')
}

module.exports = lexer
