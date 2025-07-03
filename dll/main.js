let log=console.log
class Node{
    constructor(value){
        this.value= value
        this.next=null
        this.prev=null
    }
}
class Dl{
    constructor(value){
        const newNode = new Node(value)
        this.head=newNode
        this.tail=this.head
    }
    
    push(value){

        const newNode = new Node(value)
        if(!this.head){
            this.head=newNode
            this.tail=this.head
            return;
        }
        this.tail.next = newNode
        newNode.prev=this.tail
        this.tail=newNode
        
    }

}

const dl = new Dl(10)
dl.push(7)
dl.push(9)
log(dl)