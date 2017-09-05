export class Queue {
    constructor(){
        this.q = []
    }

    enqueue(data){
        this.q.push(data)
    }

    dequeue(){
        return this.q.shift()
    }
}

export class Tree {
    constructor(){
        this.root = null    
    }

    getRoot(){
        return this.root
    }

    addNode(data){
        if(this.root === null){
            this.root = new Node(data)
        }else{
            let q = new Queue()
            this.insert(this.root,data, q)
        }
    }

    insert(node, data, q){
        
        
        if(node.left === null){
            node.left = new Node(data)
            return true
        }else if(node.right === null){
            node.right = new Node(data)
            return true
        }else{
            q.enqueue(node.left)
            q.enqueue(node.right)
            this.insert(q.dequeue(), data, q)
        }
    }
}

export class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

