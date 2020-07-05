/*
    Improvements:
    * Regex input filtering
    * Error detection
    * Proper abstract syntax tree
    * Lexer
*/

export function parse(inputString) {
    const cleanInput = inputString.replaceAll(' ', '')
    return parseAdditon(cleanInput)
}

function parseAdditon(string) {
    const terms = split(string, '+').map(expr => parseSubtraction(expr))

    return terms.reduce((a,b) => a + b, 0)
}

function parseSubtraction(string) {
    const terms = split(string, '-').map(expr => parseMultiplication(expr))

    return terms.slice(1).reduce((a,b) => a - b, terms[0])
}

function parseMultiplication(string) {
    const factors = split(string, '*').map(x => parseDivision(x))

    return factors.reduce((a,b) => a * b, 1) 
}

function parseDivision(string) {
    const factors = split(string, '/').map(x => {
        if (x[0] === '(') {
            return parseAdditon(x.slice(1,x.length - 1))
        }
        return parseInt(x)
    })

    return factors.slice(1).reduce((a,b) => a / b, factors[0])
}

function split(expr, operator) {
    const result = []
    let parenthisisLevel = 0
    let currentChunck = ""

    for (let i = 0; i < expr.length; i++) {
        const currentChar = expr[i];
        if(currentChar === '(') {
            parenthisisLevel++
        } else if(currentChar === ')'){
            parenthisisLevel--
        }

        if(parenthisisLevel === 0 && currentChar === operator) {
            result.push(currentChunck)
            currentChunck = ""
        } else currentChunck += currentChar
    }
    if(currentChunck !== "") {
        result.push(currentChunck)
    }

    return result
}