class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

export function makeMinimalTree(arr){
    if(arr.length === 0){
        return null
    }else if(arr.length === 1){
        return new Node(arr[0])
    }

    let pivot = arr.length % 2 === 0 ? arr.length/2 - 1 : (arr.length - 1)/2
    
    let newNode = new Node(arr[pivot])
    
    let right = arr.splice(pivot + 1, arr.length - 1 - pivot)
    let left = arr.splice(0, pivot)
    newNode.left = makeMinimalTree(left)
    newNode.right = makeMinimalTree(right)

    return newNode
}

export function inOrder(tree){
    if(tree === null) return
    inOrder(tree.left)
    console.log(tree.data)
    inOrder(tree.right)
}