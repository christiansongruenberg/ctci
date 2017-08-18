export function isConnected(graph, node1, node2){
    //do node1 first, then node2
    bfs(graph, node1, node2)
}

function bfs(graph, node1, node2){
    
    //queue all node 1 adjacent nodes
    
    console.log(graph.getNode(node1))
}

class Queue {
    
    constructor(){
        this.queue = []
    }
    
    queue(node){
        this.queue.shift(node)
    }

    enqueue(){
        return this.queue.unshift()
    }
}