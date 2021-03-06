import { expect } from 'chai'
import { Graph } from '../DataStructures/graph'
import { isConnected } from './4.1'

describe('isConnected checks if 2 nodes are connected', function(){
    it('returns true for 2 connected nodes', function(){
        const nodeData = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'
        ]

        let graph = new Graph

        const nodes = nodeData.reduce( (carry, data) => {
            carry[data] = graph.newNode(data)
            return carry
        }, [])
        
        const connections = [
            [nodes['a'],nodes['d']],
            [nodes['b'],nodes['a']],
            [nodes['d'],nodes['b']],
            [nodes['b'],nodes['g']],
            [nodes['g'],nodes['h']],
            [nodes['f'],nodes['e']],
            [nodes['e'],nodes['c']],
            [nodes['c'],nodes['d']],
        ]

        connections.forEach( pair => {
            graph.addConnection(pair[0], pair[1])
        })

        expect(isConnected(graph, nodes['a'], nodes['h'])).to.be.true

    })
})