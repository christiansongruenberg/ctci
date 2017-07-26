export function LinkedList(){
    
    this.head = null
    
    this.add = function(value){
        if(this.head === null){
            this.head = new Node(value)
            return
        }

        let tail = goToTail(this)
        tail.next = new Node(value)
    }

    function goToTail(list){
        let currNode = list.head
        
        while(currNode.getNext() !== null) {
            currNode = currNode.getNext()
        }

        return currNode
    }

    this.getTail = function(){
        let currNode = this.head
        
        while(currNode.next !== null){
            currNode = currNode.next
        }

        return currNode
    }

    this.printAsArray = function(){
        let currNode = this.head;
        let arr = []

        while(currNode !== null){
            arr.push(currNode.getValue())
            currNode = currNode.next
        }

        return arr
    }
} 
    
export function Node(value){
    
    this.value = value
    this.next = null

    this.getValue = function(){
        return this.value
    }


    this.setValue = function(value){
        this.value = value
    }

    this.getNext = function(){
        return this.next
    }

    this.setNext = function(next){
        this.next = next
    }

}