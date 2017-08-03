export function intersects(ll1, ll2){

    //go to end of ll1
    let currNode1 = ll1.head;
    let length1 = 1
    while(currNode1.next !== null) {
        currNode1 = currNode1.next
        length1++
    }

    //go to end of ll2
    let currNode2 = ll2.head
    let length2 = 1
    while(currNode2.next !== null){
        currNode2 = currNode2.next
        length2++
    }

    if(currNode2 === currNode1){

        let startNode1 = ll1.head
        let startNode2 = ll2.head
        let diff = Math.abs(length1 - length2)
        //find intersecting
        if(length1 > length2){
            //step ll1 forward
            for(let i = 0; i < diff; i++){
                startNode1 = startNode1.next
            }
        
        }else if(length2 > length1){
            //step ll2 forward
            startNode2 = startNode2.next
        }

        while(startNode2 !== null && startNode1 !== null){
            if(startNode1 == startNode2){
                return startNode1
            }
            startNode1 = startNode1.next
            startNode2 = startNode2.next
        }

        return false
    }else {
        //they arent intersecting

        return false
    }

}