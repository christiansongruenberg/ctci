import { expect } from 'chai'
import { sortStack } from './3.5'
import { Stack } from '../DataStructures/stack'

describe('sortStack sorts the stack to have the smallest at the top', function(){
    it('sorts the stack', function(){
        let stack = new Stack
        let values = [1,7,5,6,3,9]
        let sorted = [9,7,6,5,3,1]

        stack.stack = values

        expect(sortStack(stack).stack).to.eql(sorted)
    })
})