// import { Tree } from '../DataStructures/tree'

export function depthLists(tree){

    let depths = [] 

    //initialize first layer with roote
    depths[0] = [tree.root]
    let level = 0;
    while(level < depths.length){
        
        let currDepth = depths[level];
        depths[level+1] = []
        let nextDepth = depths[level + 1]

            currDepth.forEach(function(node){
                if(node.left !== null){
                    nextDepth.push(node.left)
                }

                if(node.right !== null){
                    nextDepth.push(node.right)
                }
            })

        
        level++;
        if(nextDepth.length === 0) break;
    }

    return depths
}