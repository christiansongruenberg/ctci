import { expect } from 'chai'
import { makeMinimalTree, inOrder } from './4.2'

describe.only('make minimal tree from sorted array', function(){
    it('makes tree', function(){
        let tree = makeMinimalTree([0,1,2,3,4,5,6,7])

        inOrder(tree)
    })
})