import { expect } from 'chai'
import { LinkedList, Node } from './linkedList'

describe('Node Class', function(){
    it('sets the value of the node when instantiated', function(){
        let value = "foo"
        let newNode = new Node(value)

        expect(newNode.value).to.equal(value)
    })

    it('Node.getValue returns instantiated value', function(){
        let value = "foo"
        let newNode = new Node(value)

        expect(newNode.getValue()).to.equal(value)    
    })

    it('Node.setValue changes the value', function(){
        let value = "foo"
        let newNode = new Node(value)

        expect(newNode.getValue()).to.equal(value)
        let newValue = 'bar'
        newNode.setValue(newValue)

        expect(newNode.getValue()).to.equal(newValue)
    })

    it('instantiates next as null', function(){
        let newNode = new Node('foo')

        expect(newNode.next).to.eql(null)
    })

    it('Node.setNext sets the new next object', function(){
        let newNode = new Node('foo')
        let secondNode = new Node('bar')

        newNode.setNext(secondNode)

        expect(newNode.next).to.equal(secondNode)
        expect(newNode.next.getValue()).to.equal('bar')
    })

    it('Node.getNext() returns next object', function(){
        let newNode = new Node('foo')
        let secondNode = new Node('bar')

        newNode.setNext(secondNode)

        expect(newNode.getNext()).to.equal(newNode.next)
        expect(newNode.getNext()).to.equal(secondNode)
    })

    
})

describe.only('LinkedList', function(){
    it('adding to empty linked list sets it to head', function(){
        let ll = new LinkedList

        const value = 1
        ll.add(value)

        expect(ll.head.value).to.equal(value)
    })

    it('adds value to the tail', function(){
        let ll = new LinkedList

        const values = [1,2,3]
        values.forEach(function(v){
            ll.add(v)
        })

        let currNode = ll.head;
        let count = 0;
        console.log(ll.printAsArray())
        while(currNode !== null ){
            expect(currNode.value).to.equal(values[count])
            currNode = currNode.next;
            count++
        }
        
    })
})