export function hasLoop(ll){
    let slowRunner = ll.head
    let fastRunner = ll.head
    
    let sr = slowRunner
    let fr = fastRunner

    while(fr !== null){
        if(fr.next === null){
            return false
        }

        fr = fr.next.next
        sr = sr.next

        if(fr == sr){
            let head = ll.head

            while(head !== fr){
                head = head.next
                fr = fr.next
            }
            
            return head
        }
    }
    return false
}