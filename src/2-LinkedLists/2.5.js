import { LinkedList } from '../DataStructures/linkedList'

export function sumList(ll1,ll2){
    let sum = new LinkedList
    let currNode1 = ll1.head
    let currNode2 = ll2.head
    let carry = 0;
    //while both currNodes are not null
    while(currNode1 !== null || currNode2 !== null) {

        if(currNode1 === null && currNode2 !== null){

            let placeValue = currNode2.value + carry
            carry = Math.floor(placeValue/10)
            let finalPlaceValue = placeValue % 10
            sum.add(finalPlaceValue)

            currNode2 = currNode2.next
        } else if(currNode1 !== null && currNode2 === null){
            let placeValue = currNode1.value + carry
            carry = Math.floor(placeValue/10)
            let finalPlaceValue = placeValue % 10
            sum.add(finalPlaceValue)

            currNode1 = currNode1.next
        } else {
            
            let placeValue = currNode1.value + currNode2.value + carry
            carry = Math.floor(placeValue/10)
            let finalPlaceValue = placeValue % 10
            sum.add(finalPlaceValue)

            currNode1 = currNode1.next
            currNode2 = currNode2.next
        }

        
    }

    return sum
}