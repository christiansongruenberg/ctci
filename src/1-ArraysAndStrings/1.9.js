export function isRotation(s1, s2){
    if(s1.length === s2.length){
        return isSubstring(s1+s1, s2)
    }

    return false
}

function isSubstring(s1, s2){
    return s1.indexOf(s2) > -1;
}