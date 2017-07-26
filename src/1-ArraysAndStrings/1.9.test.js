import { expect } from 'chai'
import { isRotation } from './1.9'

describe('1.9 String Rotation', function(){
    let tests = [
        {
            s1: "waterbottle",
            s2: "erbottlewat",
            answer: true
        },
        {
            s1: "waterbottle",
            s2: "erbottlewta",
            answer: false
        },
        {
            s1: "waterbottle",
            s2: "waterbotter",
            answer: false
        }
    ]

    tests.forEach(function(test){
        it(`isRotation(${test.s1}, ${test.s2}) = ${test.answer}`, function(){
            expect(isRotation(test.s1, test.s2)).to.equal(test.answer)
        })
    })
})