export class Graph {

    constructor(){
        this.idCount = 0;
        this.nodes = []
    }

    addConnection(baseNode, connectedToNode){
        baseNode.addAdjacentNode(connectedToNode)
    }

    addPair(base, connectedTo){
        let baseNode = this.newNode(base)
        let connectedToNode = this.newNode(connectedTo)
        this.addConnection(baseNode, connectedToNode)
    }

    newNode(data){
        const id = this.idCount
        let newNode = new Node(id, data)

        this.nodes[id] = newNode
        this.idCount++
        return newNode
    }
}

export class Node {
    constructor(id, data){
        this.id = id
        this.adjacency = []
        this.data = data
    }

    addAdjacentNode(adjacentNode){
        this.adjacency.push(adjacentNode.id)
    }
}