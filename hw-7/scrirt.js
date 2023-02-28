let numOrStr = prompt("input number or string");
console.log(numOrStr)

if (numOrStr === null) {
    consol.log("Ви скасували")
} else {
switch (numOrStr) {
    case (numOrStr.trim()) === "":
        console.log("Empty String")
        break;
    case (isNaN(+numOrStr)):
        console.log("number is Ba_NaN")
        break;
    default:
        console.log("OK!")
}
}








// switch (numOrStr) {
//     case null:
//         console.log("Ви скасували")
//         break;
//     case (numOrStr.trim() === ''):
//         console.log('Empty String')
//         break;
//     case (isNaN( +numOrStr )):
//         console.log('number is Ba_NaN')
//         break;
//     default:
//         console.log('OK!')
//         break;
// }