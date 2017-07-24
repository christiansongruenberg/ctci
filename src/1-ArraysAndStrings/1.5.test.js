import { expect } from 'chai'
import { OneAway } from './1.5'

describe("1.5 One Away", function(){
    it("returns true f(pale, ple)", function(){
        expect(OneAway("pale", "ple")).to.be.true
    })

    it("returns true f(pales, pale)", function(){
        expect(OneAway("pales", "pale")).to.be.true
    })

    it("returns true f(pale, bale)", function(){
        expect(OneAway("pale", "bale")).to.be.true
    })

    it("returns true f(pale, pale)", function(){
        expect(OneAway("pale", "pale")).to.be.true
    })

    it("returns false f(pale, bake)", function(){
        expect(OneAway("pale", "bake")).to.be.false
    })

    it("returns false f(pal, pales)", function(){
        expect(OneAway("pal", "pales")).to.be.false
    })

    it("returns false f(pall, pales)", function(){
        expect(OneAway("pall", "pales")).to.be.false
    })
})