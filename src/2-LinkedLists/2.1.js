
export function removeDups(ll){

    let currNode = ll.head

    while(currNode !== null ){
        let checkNode = currNode.next
        let prevNode = currNode;
        while(checkNode !== null){
            
            if(currNode.value === checkNode.value){
                prevNode.next = checkNode.next
                checkNode = prevNode.next
            }else{
                prevNode = checkNode;
                checkNode = checkNode.next
            }
            
        } 
        currNode = currNode.next
    }

    return ll
}