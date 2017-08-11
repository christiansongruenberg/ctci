import { LinkedList } from '../DataStructures/linkedList'

export default class AnimalShelter {
    
    constructor(){
        this.shelter = new LinkedList
    }
    
    enqueue(animal){
        this.shelter.prepend(animal)
    }

    dequeueAny(){
        let currNode = this.shelter.head;
        let prevNode = null;
        while(currNode.next !== null){
            prevNode = currNode
            currNode = currNode.next
        }

        prevNode.next = null;
        return currNode
    }

    dequeueDog(){
        //find index of last dog
        let currNode = this.shelter.head
        let dogIndex = 0
        let counter = 0
        while(currNode !== null){
            if(currNode.value instanceof Dog){
                dogIndex = counter 
            }

            currNode = currNode.next
            counter++
        }
        //get and remove index

        return this.shelter.removeIndex(dogIndex)
    }

    dequeueCat(){
        //find index of last cat
        let currNode = this.shelter.head
        let catIndex = 0
        let counter = 0
        while(currNode !== null){
            if(currNode.value instanceof Cat){
                catIndex = counter 
            }

            currNode = currNode.next
            counter++
        }

        //get and remove index
        return this.shelter.removeIndex(catIndex)
    }

    printShelter(){
        return this.shelter.printAsArray()
    }
}

export class Dog {
    constructor(name){
        this.name = name
    }
}

export class Cat {
    constructor(name){
        this.name = name
    }
}