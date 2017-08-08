import { expect } from 'chai'
import SetOfStacks from './3.3'

describe.only('SetOfStacks starts a new stack after hitting a threshold', function(){
    it('its API works just like a normal stack', function(){
        let stack = new SetOfStacks(3)

        let values = [1,2,3,4,5]
        values.forEach( x => stack.push(x))
        expect(stack.set).to.be.length(2)
        expect(stack.set[0].stack).to.be.length(3)
        expect(stack.set[1].stack).to.be.length(2)
    })

    it('pops all stacks', function(){
        let stack = new SetOfStacks(3)

        let values = [1,2,3,4,5]
        values.forEach( x => stack.push(x))

        values = values.reverse()

        values.forEach(x => {
            expect(stack.pop()).to.equal(x)
        })
    })
})