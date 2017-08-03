import { Stack } from './stack'
import { expect } from 'chai' 

describe('Stack object', function(){
    it('pushes values', function(){
        let st = new Stack
        st.push(1)

        expect(st.stack).to.eql([1])
    })

    it('pops values', function(){
        let st = new Stack
        st.push(1)

        expect(st.pop()).to.eql(1)
    })

    it('pushes array', function(){
        let st  = new Stack
        let arr = [1,2,3,4]
        st.pushArray(arr)

        expect(st.stack).to.eql(arr)
    })
})