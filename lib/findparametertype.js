function findParameterType (parameter) {
  if (isStringParameter(parameter)) {
    return 'STRING'
  } else if (isBooleanParameter(parameter)) {
    return 'BOOLEAN'
  } else if (isNumberParameter(parameter)) {
    return 'NUMBER'
  } else if (isVariableParameter(parameter)) {
    return 'VARIABLE'
  }
}

function isStringParameter (parameter) {
  return parameter[0] === '"'
}

function isBooleanParameter (parameter) {
  return /^true|false$/.test(parameter)
}

function isNumberParameter (parameter) {
  return Number(parameter) === Number(parameter) // isNaN check
}

function isVariableParameter (parameter) {
  return /^[a-z]+[a-z0-9]*$/i.test(parameter)
}

module.exports = findParameterType
