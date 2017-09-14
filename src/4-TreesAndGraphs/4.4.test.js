import { expect } from 'chai'
import { Tree, Node } from '../DataStructures/tree'
import { checkBalanced } from './4.4'

describe('Returns height of tree or false if imbalanced', function(){
    it('returns false if imbalanced', function(){
        let tree = new Tree

        const treeData = [1,2,3,4,5,6,7]
        
        treeData.forEach(function(x){
            tree.addNode(x)
        })
        

        //create an imbalance in the tree
        let farLeft = tree.root.left.left;
        farLeft.left = new Node(10)
        farLeft.left.left = new Node(11)
        
        const height = checkBalanced(tree)

        expect(height).to.be.false
        
    })

    it('returns height if balanced', function(){
        let tree = new Tree
        
                const treeData = [1,2,3,4,5,6,7]
                
                treeData.forEach(function(x){
                    tree.addNode(x)
                })
                
                
                const height = checkBalanced(tree)
        
                expect(height).to.be.eql(3)
    })
})