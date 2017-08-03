import { expect } from 'chai'
import { sumList } from './2.5'
import { LinkedList } from '../DataStructures/linkedList'

describe('2.5 sumList() sums linked list', function(){
    it('sums 2 lists', function(){
        let value1 = [3, 4, 8]
        let value2 = [9, 3, 4, 4]
        let sum =  [2, 8, 2, 5]

        let ll1 = new LinkedList
        ll1.appendArray(value1)

        let ll2 = new LinkedList
        ll2.appendArray(value2)

        expect(sumList(ll1, ll2).printAsArray()).to.eql(sum)
    })
})