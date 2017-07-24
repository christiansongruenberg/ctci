import { expect } from 'chai'
import { palindromePermutation } from './1.4'

describe('1.4 Palindrome Permutation', function(){
    it('returns true when passed "girafarig"', function(){
        expect(palindromePermutation("girafarig")).to.be.true
    })

    it('returns true if passed "taco cat" (spaces)', function(){
        expect(palindromePermutation("taco cat")).to.be.true
    })

    it('returns false when passed "not a palindrome"', function(){
        expect(palindromePermutation("not a palindrome")).to.be.false
    })
})