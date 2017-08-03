import { LinkedList } from '../DataStructures/linkedList'

export function isPalindrome(ll){
    let reversed = new LinkedList

    let currNode = ll.head;
    while(currNode !== null){
        if(reversed.head === null){
            reversed.add(currNode.value)
        }else{
            reversed.prepend(currNode.value)
        }

        currNode = currNode.next
    }

    currNode = ll.head
    let reversedCurrNode = reversed.head

    while(currNode !== null && reversedCurrNode !== null){
        if(currNode.value !== reversedCurrNode.value){
            return false
        }

        currNode = currNode.next
        reversedCurrNode = reversedCurrNode.next
    }

    return true
}