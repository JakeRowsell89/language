const keywords = {
  'let': 'VARIABLE_DECLARATION',
  '+': 'OPERATOR_PLUS',
  '-': 'OPERATOR_MINUS',
  '//': 'COMMENT_SINGLE',
  '\n': 'END_OF_LINE'
}

module.exports = word => keywords[word]
