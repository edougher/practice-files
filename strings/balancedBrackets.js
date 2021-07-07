/*
  given a string that contains '(', ')', '{', '}', '[', ']'. the string is balanced if it has a corresponding symbols at the beginning and end.

  true = '(eqrveqfvev)'
  false = '[erqvefrverv)'

*/

function balanced(str) {
    let first = str[0]
    let last = str[str.length - 1]

    switch (first) {
        case '(':
            return (last === ')')
            break;
        case '[':
            return (last === ']')
            break;
        case '{':
            return (last === '}')
            break;
        default:
            return false
            break;
    }    
}

const n = '(cwvveve})'
console.log(balanced(n));
