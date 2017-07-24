export function compress(s){
    if(s === null) throw 'string to compress is null';
    let compressedString = '';

    for(let i = 0; i < s.length; i++){
        let charCount = 1;
        
        while(s[i] === s[i + charCount]){

            charCount++;
        }
        
        compressedString = compressedString + s[i] + charCount

        i = i + charCount - 1;
    }

    return compressedString.length < s.length ? compressedString : s;
}