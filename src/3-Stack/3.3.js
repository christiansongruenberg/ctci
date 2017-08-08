import { Stack } from '../DataStructures/stack'

export default class SetOfStacks {
    constructor(threshold){
        this.set = []
        this.threshold = threshold
    }

    push(value){
        if(this.set.length == 0){
            //first push
            let currentStack = this.set[0] = new Stack
            currentStack.push(value);
            return
        }

        let currentStack = this.set[this.set.length - 1]
        if(currentStack.stack.length >= this.threshold){
            currentStack = this.set[this.set.length] = new Stack
        }

        currentStack.push(value)
    }

    pop(){
        let currentStack = this.set[this.set.length - 1]
        let pop = currentStack.pop()
        if(currentStack.stack.length === 0){
            this.set.pop()
        }

        return pop
    }
}