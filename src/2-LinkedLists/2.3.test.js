import { expect } from 'chai'
import { LinkedList } from '../DataStructures/linkedList'
import { deleteNode } from "./2.3"

describe("2.3 Delete any node thats not the tail or head and only have access to the node", function(){
    it("Deletes a middle node", function(){
        let ll = new LinkedList

        let values = [1,2,3]

        ll.appendArray(values)

        let secondNode = ll.head.next
        deleteNode(secondNode)
        expect(ll.printAsArray()).to.eql([1,3])
    })
})