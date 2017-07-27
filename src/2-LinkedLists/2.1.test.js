import { expect } from 'chai'
import { LinkedList } from '../DataStructures/linkedList.js'
import { removeDups } from './2.1';

describe("2.1 Remove Duplicates form linked list", function(){
    it('removeDups returns an array with the duplicates removed', function(){
        let ll = new LinkedList
        let input = [1,1,2,2,3,3,4,4,5,5,1,2,3,4,5]
        let output = [1,2,3,4,5]
        ll.appendArray(input)

        expect(removeDups(ll).printAsArray()).to.eql(output)
    })

    
})
