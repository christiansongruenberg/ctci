export function checkBalanced(tree){
    let root = tree.getRoot()

    return nodeHeights(root)
}

function nodeHeights(node){
    if(node === null){
        return 0
    }

    let leftHeight = nodeHeights(node.left)
    let rightHeight = nodeHeights(node.right)

    if(leftHeight === false || rightHeight === false){
        return false
    }

    let difference = Math.abs(leftHeight - rightHeight)

    if(difference <= 1){
        return leftHeight >= rightHeight ? leftHeight + 1 : rightHeight + 1
    }

    return false;

}