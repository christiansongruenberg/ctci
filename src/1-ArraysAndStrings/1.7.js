export function rotate(array){
    //should look for the 2nd dimension array that has the longest array
    
    let longest2ndDimension = array.reduce(function(longest, curr){
        return curr.length > longest ? curr.length : longest
    }, 0)

    let rotatedArray = []
    
    array.forEach(function(column, c){
        column.forEach(function(element, r){
            if(!rotatedArray[r]){
                rotatedArray[r] = []
            }
            rotatedArray[r][longest2ndDimension - 1 - c] = element
        })
    })




    return rotatedArray
}