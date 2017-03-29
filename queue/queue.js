
/**
 * FIFO原则
 * 
 */
function Queue(){
    this.items = [];
}
//入队
Queue.prototype.enqueue = function(ele){
    this.items.push(ele);
}
//出队
Queue.prototype.dequeue = function(){
    //出队超出范围返回 undefined;

    return this.items.shift();
}
//返回队列第一个元素
Queue.prototype.front = function(){
    return this.items[0];
}
//返回队列长度
Queue.prototype.size = function(){
    return this.items.length;
}
//判空
Queue.prototype.isEmpty = function(){
    return this.items.length == 0;
}
//清空队列
Queue.prototype.clear = function(){
    this.items.length = 0;
}
//遍历队列
Queue.prototype.traverse  = function(){
    return this.items.join(' ');
};
/**
 * TEST
 * 
 */
(function(){
     let queue = new Queue();
    console.log(queue.isEmpty());
    queue.enqueue(7);
    queue.enqueue(0);
    queue.enqueue(1);
    queue.enqueue(2);
    console.log(queue.dequeue());
    console.log(queue.size());
    console.log(queue.traverse());
    queue.clear();
    console.log(queue.size());
})();

