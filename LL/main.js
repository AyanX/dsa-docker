const log=console.log

class Node{
    constructor(value){
        this.value= value;
        this.next=null
    }
}

class LinkedList{
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head
        this.count =1
    }

    push(value){
        let newNode = new Node(value)
        if(!this.head){
             this.head = newNode
             this.tail = this.head
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.count++
        return this
    }

    pop(){
        if(!this.tail) return undefined

        let temp = this.head
        let h2 = this.head

        while(temp.next){
            h2 = temp;
            temp = temp.next
        }
        this.tail = h2
        this.tail.next = null
        this.count--

        if (this.count < 1){
            this.head = null
            this.tail = null
        }
        return h2

    }
    unshift(value){
        const newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
            this.count++
            return this
        }

        newNode.next= this.head
        this.head = newNode
        this.count++
        return this
    }
    shift(){
        if (!this.head) return undefined
        if(this.count === 1){
            this.count--
            this.head= null
            this.tail = null
            return
        }
        let temp = this.head
        this.head = this.head.next
        this.count--
        temp.next = null
        return temp
    }
    get(index){
        if (!this.head || index >= this.count || index<0) return null
        let count = 0
        let temp = this.head
        while(count < index){
            temp = temp.next
            count++
        }
        return temp
    }
    set(value,index){
         if (!this.head || index >= this.count || index<0) return false

        let curr = this.get(index)
        if(!curr) return null
        curr.value = value
        return true
    }
    insert(value,index){
        if(!this.head || index > this.length || index < 0)return false
        if(index === 0)return this.unshift(value)
        if (index == this.length) return this.push(value)
        
        let temp = this.get(index-1)
        if (!temp) return false
        let newNode = new Node(value)

        console.log(temp)
        newNode.next = temp.next
        temp.next = newNode
        this.count++
        return true
    }
    remove(index){
        if(!this.head || index > this.count || index < 0) return false
        log("yay")
        if(index===0) return this.shift()
        if (index === this.length) return this.pop()
        
        let temp = this.get(index-1)
        let curr = temp.next

        temp.next = curr.next
        curr.next=null
        this.count--
        return true

    }
    reverse(){
        //switch head and tail
       let temp = this.head
       this.head =this.tail
       this.tail = temp

       let prev = null
       

       for(let i=0; i< this.count;i++){
            let next = temp.next
            temp.next = prev
            prev = temp
            temp = next
       }

    }

    x(){
        let y = this.head
        for(let i=0; i <this.count ; i++){
            log(i)
            log(y)
            if(y.next){
                     y=y.next
            }
           
            
           
        }
    }
}

let ll = new LinkedList(5)
ll.push(10)
ll.push(20)
ll.push(29)
ll.pop()
ll.unshift(100)
ll.shift()
ll.set(105,2)
ll.insert(200,0)
ll.remove(5)
log(ll.x())
ll.reverse()
log(ll.x())