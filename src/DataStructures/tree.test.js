import { expect } from 'chai'
import { Tree } from './tree'

describe("Tree", function(){
    it('inserts into the tree', function(){
        let tree = new Tree()
        
        const treeData = [1,2,3,4,5,6,7]
        
        treeData.forEach(function(x){
            tree.addNode(x)
        })

        
        console.log(tree.root)
    })
})