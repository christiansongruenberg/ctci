import { expect } from 'chai'
import { MyQueue } from './3.4'

describe.only('MyQueue implements enqueue and dequeue', function(){
    it('enqueues', function(){
        let q = new MyQueue;
        let values = [1,2,3]
        values.forEach(function(x){
            q.enqueue(x)
        })

        expect(q.queue.stack).to.eql(values.reverse())
    })

    it('dequeues', function(){
        let q = new MyQueue;
        let values = [1,2,3]
        values.forEach(function(x){
            q.enqueue(x)
        })
        
        values.forEach(function(x){
            expect(q.dequeue()).to.equal(x)
        })
    })
})