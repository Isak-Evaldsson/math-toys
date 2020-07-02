/*
    TODO:
    * Regex input filtering
    * Error detection
*/

export function parse(inputString) {
    const cleanInput = inputString.replaceAll(' ', '')
    return parseAdditon(cleanInput)
}

function parseAdditon(string) {
    const numbers = string.split('+').map(x => parseInt(x))

    return numbers.reduce((a,b) => a + b, 0)
}