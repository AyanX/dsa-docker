let log = console.log

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Stack{
    constructor(value){
        let newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }

    push(value){
        let newNode = new Node(value)
        if(this.length < 1 || !this.length){  
            this.top = newNode
        }else{
            newNode.next = this.top
            this.top=newNode
        }
        this.length++
        return this
    }
    pop(){
        if(this.length < 1 || !this.length) return false
        if(this.length=== 1){
            this.top = null
            this.count--
            return this
        }
        let curr = this.top
        this.top= this.top.next
        curr.next = null
        this.length--
        return curr
    }
}

let stack = new Stack(10)
stack.push(5)
stack.push(12)
stack.push(59)
stack.pop()
log(stack)