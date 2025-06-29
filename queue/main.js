let log = console.log

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Queue{
    constructor(value){
        const newNode = new Node(value)
        this.first = newNode
        this.last = newNode
        this.length=1
    }
    enqueue(value){
        const newNode = new Node(value)
        if(!this.length || this.length < 0){
            this.first = newNode
            this.last = newNode
            this.length=1
        }else{
            this.last.next =newNode
            this.last = newNode
        }
        this.length++
        return 
    }
    //remove first item
    dequeue(){
        if(this.length < 0 || !this.length) return false
        if(this.length === 1) {
            this.first=null
            this.last=null
            this.length--
            return
        }
        let first = this.first
        this.first = first.next
        first.next=null
        this.length--
        return
    }
}

let q = new Queue(10)
q.enqueue(22)
q.enqueue(76)
log(q)
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
log(q)