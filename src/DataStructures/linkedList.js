export function LinkedList(){
    
    this.head = null
    
    this.add = function(value){
        if(this.head === null){
            this.head = new Node(value)
            return
        }

        let tail = this.goToTail()
        tail.next = new Node(value)
    }

    this.prepend = function(value){
        let newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }

    this.goToTail = function(){
        let currNode = this.head
        
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

    this.removeIndex = function(index){
        
        //remove head if index 0
        if(index == 0){
            this.head = this.head.next
            return
        }

        //go to node at index
        let currNode = this.head;
        let prevNode = null;
        for(let i = 0; i < index; i++){
            prevNode = currNode;
            currNode = currNode.next;

            //return if index is larger than the linkedList
            if(currNode == null){
                return
            }
        }

        prevNode.next = currNode.next
        return currNode
    }


    this.appendArray = function(arr){
        arr.forEach(function(value){
            this.add(value)
        }.bind(this))
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