export function validateBST(tree){
    let root = tree.getRoot()

    let treeData =  traverse(root)

    return treeData.valid
}

function traverse(root){
    if(root === null) return null;

    let subTreeData = {
        valid: null,
        largest: null,
        smallest: null
    }

    let leftTree = traverse(root.left)
    
    let rightTree = traverse(root.right)
    
    let leftValid
    let rightValid
    if(leftTree !== null){
        leftValid = root.data >= leftTree.largest && leftTree.valid
        subTreeData.smallest = leftTree.smallest
    }else{
        leftValid = true;
        subTreeData.smallest = root.data
    }

    if(rightTree !== null){
        rightValid = root.data < rightTree.smallest && rightTree.valid
        subTreeData.largest = rightTree.largest
    }else{
        rightValid = true
        subTreeData.largest = root.data
    }

    subTreeData.valid = rightValid && leftValid;


    return subTreeData
}

function checkNode(node){

    let leftValid = true, rightValid = true

    if(node.left){
        leftValid = node.data >= node.left.data
    }

    if(node.right){
        rightValid = node.data < node.right.data
    }
    return leftValid && rightValid 
}