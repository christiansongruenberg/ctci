export function kthToTheLast(ll, toTheLast){
    let runner = ll.head
    let slowRunner = ll.head

    for(let i = 1; i < toTheLast; i++){
        runner = runner.next

        if(runner === null) return -1
    }

    while(runner.next !== null){
        runner = runner.next
        slowRunner = slowRunner.next
    }

    return slowRunner
}