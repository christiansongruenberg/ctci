export function OneAway(s1, s2){

    if(s1 === s2) return true;

    if(s1.length === s2.length){
        //check replace

        return checkReplace(s1, s2)
    }

    if(Math.abs(s1.length - s2.length) === 1){
        //insert or remove

        return checkInsertOrReplace(s1, s2);
    }

    return false
}

function checkReplace(s1, s2){
    let diffCount = 0;

    for(let i = 0; i < s1.length; i++){
        if(diffCount > 1) return false;

        if(s1[i] !== s2[i]) diffCount++;
    }

    return true;
}

function checkInsertOrReplace(s1, s2){
    let long, short;
    
    if(s1.length > s2.length){
        long = s1;
        short = s2;
    }else {
        long = s2;
        short = s1;
    }

    let longArray = long.split("");
    let shortArray = short.split("")
    let insertCount = 0;

    for(let i = 0; i < longArray.length; i++){
    
        if(longArray[i] !== shortArray[i]){
            insertCount++;
            shortArray.splice(i, 0, longArray[i])
        }
    }

    if(insertCount > 1) return false;

    return true;
}