import { expect } from 'chai'
import { rotate } from './1.7'

describe('1.7 rotate matrix 90 degrees', function(){
    it('rotates 90 degrees', function(){
        
        let initialArray = [[1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15] ,[4, 8, 12, 16]]
        
        let rotatedArray = [[4,3,2,1],[8,7,6,5],[12,11,10,9],[16, 15,14,13]]
        
        
        expect(rotate(initialArray)).to.eql(rotatedArray)
    })
})