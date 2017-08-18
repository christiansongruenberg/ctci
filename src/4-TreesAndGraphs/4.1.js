export function isConnected(graph, node1, node2){
    //do node1 first, then node2
    if(bfs(graph, node1, node2)){
        return true
    }

    return bfs(graph, node2, node1)
}

function bfs(graph, node1, node2){
    
    //check if given nodes are the same
    if(areEqual(node1, node2)){
        return true
    } 
    
    let q = new Queue

    //queue first node
    q.enqueue(node1.id)


    while(q.queue.length > 0){
        let currNode = graph.getNode(q.dequeue())
        if(currNode == node2){
            return true
        }

         //queue all node 1 adjacent nodes
        currNode.adjacency.forEach( id => {
            q.enqueue(id)
        })
    }

    //loop through q until empty
        //dequeue a node
        //check if the node is equal to node 2
            //if it is, return true
        //queue all adjacent nodes

    return false
}

function areEqual(node1, node2){
    return node1 == node2
}

class Queue {
    
    constructor(){
        this.queue = []
    }
    
    enqueue(value){

        this.queue.push(value)
    }

    dequeue(){
        return this.queue.shift()
    }
}