import { expect } from 'chai'
import { LinkedList } from '../DataStructures/linkedList'
import { hasLoop } from './2.8'

describe('hasLoop() detects if there is a loop in the ll', function(){
    it('returns the node that starts the loop', function(){
        let ll = new LinkedList
        let start = [1,2,3]
        ll.appendArray(start)
        let loopStartNode = ll.goToTail()
        let loopValues = [4,5,6,7,8,9]
        ll.appendArray(loopValues)
        ll.goToTail().next = loopStartNode

        expect(hasLoop(ll)).to.equal(loopStartNode)
    })

    it('returns false if there is no loop', function(){
        let ll = new LinkedList
        let values = [1,2,3,4,5,6,7,8,9]
        ll.appendArray(values)
        
        expect(hasLoop(ll)).to.be.false
    })
})