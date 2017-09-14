import { expect } from 'chai'
import { Tree } from '../DataStructures/tree'
import { depthLists } from './4.3'

describe('Returns lists of each depth', function(){
    it('returns list of depths', function(){
        let tree = new Tree

        const treeData = [1,2,3,4,5,6,7]
        
        treeData.forEach(function(x){
            tree.addNode(x)
        })

        const depths = depthLists(tree)
        expect(depths[0].length).to.eql(1)
        expect(depths[1].length).to.eql(2)
        expect(depths[2].length).to.eql(4)
    })
})