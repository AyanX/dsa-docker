let log = console.log

class Node{
    constructor(value){
        this.value= value
        this.left = null
        this.right = null
        this.count=1
    }
}

class Btree{
    constructor(){
        this.head=null
    }

    insert(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            return
        }
        let temp = this.head
        while(1){
            // multiple occurences
            if(temp.value === node.value){
                temp.count++
                return this
            }

            if(node.value < temp.value){
                //go left
                if(!temp.left){
                    temp.left = node
                    return
                }
                temp = temp.left
            }else{
                 if(!temp.right){
                    temp.right = node
                    return
                }
                temp = temp.right
            }



        }
        return this
    }
    contains(value){
        if(!this.head) return false
        let temp = this.head

        while(1){
            if(value === temp.value) return temp
            
            if(value < temp.value){
                if(!temp.left) return false
                temp = temp.left
            }else{
                if(!temp.right) return false
                temp = temp.right
            }
        }
    }
    minValue(){
        if(!this.head) return false
        let temp = this.head

        while(temp.left){
            temp= temp.left
        }
        return temp
    }
    maxValue(){
        if(!this.head) return false
        let temp = this.head

        while(temp.right){
            temp= temp.right
        }
        return temp
    }
}

const b = new Btree
b.insert(5)
b.insert(8)
b.insert(9)
b.insert(3)
b.insert(1)
b.insert(7)
log(b.maxValue())