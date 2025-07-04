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
    pop(){
        if(!this.head){
            return 0;
        }

        if(!this.head.next){
            this.head=null
            this.tail=null
            return 1
        }


        let temp = this.tail
        this.tail = this.tail.prev
        this.tail.next = null
        temp.prev = null

        return 1
    }
    unshift(value){ 
        const newNode = new Node(value)
        if(!this.head){
            this.head=newNode
            this.tail=this.head
            return 1;
        }
        this.head.prev = newNode
        newNode.next = this.head

        this.head=newNode
        return 1
    }

}

const dl = new Dl(10)
dl.push(7)
dl.push(9)
dl.pop()
dl.push(11)
dl.unshift(2)
log(dl.head)