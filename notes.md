Notes on Language design

Various comment formats



Rules:
- Don’t overload of operators/symbols/characters 
- Reduce potential for mistakes by sticking to simple rules


Operator precedence:
Rather than a complex precedence table just evaluate left to right
1 - 2 * 2 -- this is  -2 rather than -3 which assigning the * operator with higher precedence


Comments advantages and drawbacks:
-- (double dash) readable
; (semicolon) this can double as an eol character stripping off anything to the right
// used as convention
# used as convention


Whitespace:
Should whitespace 