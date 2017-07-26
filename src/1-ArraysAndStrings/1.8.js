export function zeroMatrix(arr){
    let finalArray = arr.map(function(c){
        return []
    })
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] === 0){
                let c = i;
                let r = j;
                
                //change every element in the row
                for(let k = 0; k < arr.length; k++){
                    finalArray[k][r] = 0
                }

                //change every element in column
                for(let l = 0; l < arr[c].length; l++){
                    finalArray[c][l] = 0
                }
            }
        }
    }

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(finalArray[i][j] !== 0){
                finalArray[i][j] = arr[i][j]
            }
        }
    }
    
    return finalArray;
}