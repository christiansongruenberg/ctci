import { expect } from 'chai';
import { URLify } from './1.3';

describe('1.3 URLify', function(){
    it('returns "I%20am%20Ian" when passed "I am Ian"', function(){
        expect(URLify("I am Ian")).to.equal("I%20am%20Ian")
    })

    it('returns nospaces when passed nospaces', function(){
        expect(URLify("nospaces")).to.equal("nospaces")
    })
})