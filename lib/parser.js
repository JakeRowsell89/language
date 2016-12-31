const findParameterType = require('./findparametertype.js')

let scope = {}

function parse (tokens) {
  console.log(tokens)
  return handleCommand(tokens)
}

function handleCommand (tokens) {
  const token = tokens[0]
  if (token === 'VARIABLE_DECLARATION') {
    return declareVariable(tokens.slice(1))
  } else if (token === 'OPERATOR_PLUS') {
    const { result, remainder } = addTokens(tokens.slice(1))

    if (!remainder.length) {
      return expandQuotesIfString(result)
    } else {
      return handleCommand(remainder)
    }
  } else if (isBreakingToken(token)) {
    if (token === 'COMMENT_SINGLE') {
      const nextIndex = findFirstBreakingIndex(tokens.slice(1))

      return handleCommand(tokens.slice(nextIndex + 1))
    } else {
      return handleCommand(tokens.slice(1))
    }
  }
}

function declareVariable (tokens) {
  scope[tokens[0]] = tokens[1]
  return handleCommand(tokens.slice(2))
}

function addTokens (tokens) {
  // get all tokens until '\n'
  const foundIndex = findFirstBreakingIndex(tokens)
  const endIndex = foundIndex !== -1 ? foundIndex : tokens.length + 1
  const remainder = tokens.slice(endIndex)
  let parameters = tokens.slice(0, endIndex)

  if (parameters.length === 1) {
    parameters = [0].concat(parameters)
  }

  const result = parameters.map(getValueForParam).reduce((p, parameter) => {
    return p ? p + parameter : parameter
  })

  return { result, remainder }
}

function getValueForParam (parameter) {
  const parameterType = findParameterType(parameter)

  if (parameterType === 'VARIABLE') {
    parameter = scope[parameter]
  } else if (parameterType === 'STRING') {
    parameter = parameter.replace(/^"|"$/g, '')
  } else if (parameterType === 'NUMBER') {
    parameter = Number(parameter)
  }

  return parameter
}

function expandQuotesIfString (input) {
  if (typeof input === 'string' && /"/.test(input)) {
    return '"' + input.replace(/"/g, '') + '"'
  } else {
    return input
  }
}

function findFirstBreakingIndex (tokens) {
  for (let i = 0; i < tokens.length; i++) {
    if (isBreakingToken(tokens[i])) {
      return i
    }
  }

  return -1
}

function isBreakingToken (token) {
  return ['END_OF_LINE', 'COMMENT_SINGLE'].indexOf(token) > -1
}

module.exports = parse
