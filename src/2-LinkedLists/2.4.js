export function partition(ll, x){
    let lessThanTail = null;
    let currNode = ll.head
    //check head first
    if(currNode.value < x) {
        lessThanTail = ll.head
    }

    while(currNode.next !== null){
        if(currNode.next.value < x){
            //when first node is less tahn x
            if(lessThanTail === null){
                let tempNode = currNode.next;
                currNode.next = currNode.next.next;
                
                tempNode.next = ll.head;
                ll.head = tempNode
                lessThanTail = ll.head
            } else {
                let tempNode = currNode.next;
                currNode.next = currNode.next.next; 
                
                tempNode.next = lessThanTail.next
                lessThanTail.next = tempNode

                lessThanTail = tempNode
                
            }
        }

        currNode = currNode.next
    }

    console.log(ll.printAsArray())
    return ll
}