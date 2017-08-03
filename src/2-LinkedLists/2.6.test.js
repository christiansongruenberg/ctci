import { LinkedList } from '../DataStructures/linkedList'
import { isPalindrome } from './2.6'
import { expect } from 'chai'

describe("isPalindome() returns true if the linked list is a palindrome", function(){
    it('returns true when palindrome', function(){
        let values = [1,2,3,4,5,4,3,2,1]

        let ll = new LinkedList
        ll.appendArray(values)

        expect(isPalindrome(ll)).to.be.true
    })

    it('returns false when not palindrome', function(){
        let values = [1,2,3,4,3,2,1,7]

        let ll = new LinkedList
        ll.appendArray(values)

        expect(isPalindrome(ll)).to.be.false
    })
})