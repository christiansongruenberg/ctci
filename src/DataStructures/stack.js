export function Stack(){
    this.stack = []

    this.push = function(value){
        this.stack.push(value)
    }

    this.pop = function(){
        return this.stack.pop()
    }

    this.pushArray = function(arr){
        this.stack = [...this.stack, ...arr]
    }

    this.peek = function(){
        return this.stack[this.stack.length - 1]
    }
}