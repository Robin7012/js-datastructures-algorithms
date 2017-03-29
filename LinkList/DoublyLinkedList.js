function DoublyLinkedList(){
    this.head = null;
    this.lenght = 0;
}
function Node(ele){
    this.data = ele;
    //后继
    this.next = null;
    //前驱
    this.prev = null;
}
//向列表尾部添加新的项
LinkedList.prototype.append = function (ele) {
    var node = new Node(ele),current,previous;
   
    if(this.head = null){
        node.prev = nell;
        node.next = headl
    }else{
         current = this.head;
         while(current){
             previous = current;
             current = current.next;
         }
         current.next = node;
         node.next = null;
         node.prev = previous;
    }
    this.length++;
}

//从列表特定位置移除一项
LinkedList.prototype.removeAt = function (index) {
var current,i = 0,previous;
   if(index<-1 || index > this.length){
       return false;
   }else if(index = 0){
        this.head = current;
        this.head = current.next;
   }else{
       while(i++< index ){
            previous=current;
            current = current.next;
       }
       previous = current;
       current.prev = null;
       current.next.previous = previous;
       current.next = null;

   }
    this.length--;
}







