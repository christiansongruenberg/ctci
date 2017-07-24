// Replace all spaces in a string with %20

export function URLify(string){
    let charArray = string.split('');
    for(let i = 0; i < charArray.length; i++){
        if(charArray[i] === " "){
            charArray.splice(i, 1, "%", "2", "0")
        }
    }

    return charArray.join("")
}