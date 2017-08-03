import { expect } from 'chai'
import { intersects } from './2.7'
import { LinkedList } from '../DataStructures/linkedList'

describe.only('intersects() returns if the 2 linked lists intersect', function(){
    it('finds 2 intersecting linkedlists', function(){
        let ll1 = new LinkedList
        let ll2 = new LinkedList
        ll1.add(1)
        let intersectNode = ll1.head
        ll2.add(2)
        ll2.head.next = ll1.head
        ll1.prepend(4)
        ll1.prepend(3)
        ll1.appendArray([5,6,7,8])

        expect(intersects(ll1,ll2)).to.eql(intersectNode)
    })

    it('returns false when they arent intersecting', function(){
        let ll1 = new LinkedList
        let ll2 = new LinkedList
        ll1.appendArray([1,2,3,4,5])
        ll2.appendArray([1,2,3,4,5])

        expect(intersects(ll1,ll2)).to.be.false
    })
})