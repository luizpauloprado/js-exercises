/*
TESTE REGEX ON WEB
https://regexr.com

https://www.w3schools.com/jsref/jsref_obj_regexp.asp
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
*/

export const match = str => /LITERALLY/.test(str);
export const hasDot = str => /\./.test(str);
export const hasBTwoTimes = str => /b{2}/.test(str); //{from,to}, + = to infinity
export const catOrBat = str => /[cb]at/.test(str);
export const catOrBatLower = str => /[a-z]at/.test(str); //[a-zA-Z0-9]
export const notCatOrBat = str => /[^a-c]at/.test(str);
export const notWhiteSpace = str => /[^\s]/.test(str);
export const foo = str => /foo(bar|boo)/.test(str);
export const isIs = str => /\bis\b/.test(str); //boundary the word - negate \B
export const maybeTheWithSpaces = str => /(the)\s?/.test(str);

// new RegExp('')
// ? optional
// /\w/ digits and letters
// /\d/ digits
// /\s/ space
// use \W \D \S as shorthand to negate (as ^\d)
// lookahead /foo(?=bar|boo) - get the start (foobar = foo, fooboo = foo)
// lookahead negation /foo(?!bar|boo) - get the start (foobaz = foo)