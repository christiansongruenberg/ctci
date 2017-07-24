export function palindromePermutation(item){

    let charCountArray = [];

    for(let i = 0; i < item.length; i++){
        if(item[i] !== " "){
            charCountArray[item[i]] = charCountArray[item[i]] >= 1 ? charCountArray[item[i]] + 1 : 1;
        }
    }

    let oddCharCount = 0;
   for(let char in charCountArray){
        if(!isEven(charCountArray[char])) oddCharCount++;
    }

    return oddCharCount <= 1
}

function isEven(number){
    return number % 2 === 0
}

