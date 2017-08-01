export function partition(ll, x){
    let lessThanTail = null;
    let prevNode = null;
    let currNode = ll.head
    //check head first
    if(currNode.value < x) {
        lessThanTail = ll.head
    }

    while(currNode !== null){
        let nextNode = currNode.next
        if(currNode.value < x){
            //when first node is less than x
            if(lessThanTail === null){
                if(currNode === ll.head){
                    //if the first less than node is the head
                    lessThanTail = ll.head
                    prevNode = ll.head
                }else {
                    let tempNode = currNode
                    prevNode.next = nextNode
                    currNode.next = ll.head;
                    ll.head = currNode
                }
            } else {
                let tempNode = currNode;
                prevNode.next = nextNode
                tempNode.next = lessThanTail.next
                lessThanTail = tempNode
                
            }
        } else {
            prevNode = currNode
        }

        currNode = nextNode
    }
    return ll
}