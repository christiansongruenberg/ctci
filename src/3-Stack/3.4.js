import { Stack } from '../DataStructures/stack'


export class MyQueue {

    constructor(){
        this.queue = new Stack
        this.tempStack = new Stack
    }
    
    enqueue(value){
        this.copyToTempStack()
        this.queue.push(value)
        this.copyToQueue()
    }

    copyToTempStack(){
        if(this.queue.stack.length === 0){
            return
        }

        let popped = null;
        while(popped !== undefined){
            popped = this.queue.pop()
            if(popped !== undefined){
                this.tempStack.push(popped)
            }
        }

        return
    }

    copyToQueue(){
        if(this.tempStack.stack.length === 0){
            return
        }

        let popped = null;
        while(popped !== undefined){
            popped = this.tempStack.pop()
            if(popped !== undefined){
                this.queue.push(popped)
            }
        }

        return
    }

    dequeue(){
        return this.queue.pop()
    }
}