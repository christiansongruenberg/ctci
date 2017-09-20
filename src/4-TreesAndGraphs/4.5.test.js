import { expect } from 'chai'
import { Tree, Node } from '../DataStructures/tree'
import { validateBST } from './4.5'

describe.only('Checks if tree is BST', function(){
    it('returns true if valid bst', function(){
        let tree = new Tree

        const treeData = [4,2,6,1,3,5,7]
        treeData.forEach(function(x){
            tree.addNode(x)
        })
        
        expect(validateBST(tree)).to.be.true
        
    })

    it('returns false if invalid BST', function(){
        let tree = new Tree
        
                const treeData = [1,2,3,4,5,6,7]

                treeData.forEach(function(x){
                    tree.addNode(x)
                })
                
                expect(validateBST(tree)).to.be.false
    })

})