import { expect } from 'chai';
import { zeroMatrix } from './1.8'

describe("1.8 Zero Matrix. If an element is 0, make the entire row and column 0", function(){
    it('zeros out the row and column', function(){
        let initial = [
            [ 0, 2, 3, 4],
            [ 5, 6, 7, 8],
            [ 9,10,11,12],
            [13,14,15,16]
        ]

        let processed = [
            [ 0, 0, 0, 0],
            [ 0, 6, 7, 8],
            [ 0,10,11,12],
            [ 0,14,15,16]
        ]

        expect(zeroMatrix(initial)).to.eql(processed)
    })
})