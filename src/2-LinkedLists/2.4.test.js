import { expect } from 'chai'
import { partition } from './2.4'
import { LinkedList } from '../DataStructures/linkedList'

describe.only("partition", function(){
    it("seperates lower than x and higher than x", function(){
        let ll = new LinkedList

        let values = [7, 4, 5, 1, 3, 8, 9 ,10 ,5, 12]
        let x = 8;
        ll.appendArray(values)

        ll = partition(ll, 8)

        let currNode = ll.head

        while(currNode !== null && currNode.value < x){
            expect(currNode.value).to.be.below(x)
            currNode = currNode.next
        }

        while(currNode !== null){
            expect(currNode.value).to.be.at.least(x)
            currNode = currNode.next
        }
    })
})
