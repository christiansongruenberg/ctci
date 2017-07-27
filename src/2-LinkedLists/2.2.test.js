import { expect } from 'chai'
import { LinkedList } from '../DataStructures/linkedList.js' 
import { kthToTheLast } from './2.2'

describe("2.2 kthToTheLast", function(){
    it("returns kth to the last", function(){
        let ll = new LinkedList

        let values = [1,2,3,4,5,6,7,8]
        ll.appendArray(values)

        expect(kthToTheLast(ll, 2).value).to.eql(7)
    })

    it("returns -1 if not enough nodes", function(){
        let ll = new LinkedList

        let values = [1,2,3,4,5,6,7,8]
        ll.appendArray(values)

        expect(kthToTheLast(ll, 9)).to.eql(-1)
    })

    it("returns the first element if k = length of LL", function(){
        let ll = new LinkedList

        let values = [1,2,3,4,5,6,7,8]
        ll.appendArray(values)

        expect(kthToTheLast(ll, values.length).value).to.eql(values[0])
    })
})