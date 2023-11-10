function logUserName (surname, firstname) {
    let userName = surname + firstname
    console.log(userName)
} 
// logUserName('Mikhailova', ' Valya')

export function textText (a, b) {
    let c = a + b
    console.log(c)
} 
// textText ('3', ' 2')

export default logUserName // meaning we can re-name this function in the other file

