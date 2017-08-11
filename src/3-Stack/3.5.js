import { Stack } from '../DataStructures/stack'

export function sortStack(stack){
    let tempStack = new Stack;

    //loop through main stack until empty

    while(stack.stack.length > 0){
        if(tempStack.stack.length === 0){
            tempStack.push(stack.pop())
        }else{
            let pop = stack.pop();
            if(pop >= tempStack.peek()){
                tempStack.push(pop)
            }else{
                stack.push(tempStack.pop())
                stack.push(pop)
            }
        }
    }

    //copy tempStack backe 
    while(tempStack.stack.length > 0){
        stack.push(tempStack.pop())
    }

    return stack
} 