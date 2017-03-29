/**
 * 优先队列
 * 最小优先队列: 优先级的值较小的元素被放置在队列最前面
 * 最大优先队列: 把优先级的值较大的元素放置在队列最前面
 */
function PriorityQueue() {
    this.items = [];
}
//入队
PriorityQueue.prototype.enqueue = function (ele) {
    if (this.isEmpty()) {
        this.items.push(ele);
    } else {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > ele.priority) {
                this.items.splice(i, 0, ele);
                break;
            }
        }
    }

}
//出队
PriorityQueue.prototype.dequeue = function () {
    //出队超出范围返回 undefined;

    return this.items.shift();
}
//返回队列第一个元素
PriorityQueue.prototype.front = function () {
    return this.items[0];
}
//返回队列长度
PriorityQueue.prototype.size = function () {
    return this.items.length;
}
//判空
PriorityQueue.prototype.isEmpty = function () {
    return this.items.length == 0;
}
//清空队列
PriorityQueue.prototype.clear = function () {
    this.items.length = 0;
}
//遍历队列
PriorityQueue.prototype.traverse = function () {
    return this.items.join(' ');
};
/**
 * TEST
 * 
 */
(function () {
    let queue = new PriorityQueue();
    console.log(queue.isEmpty());
    queue.enqueue({priority:7});
    queue.enqueue({priority:0});
    queue.enqueue({priority:1});
    queue.enqueue({priority:2});
    console.log(queue.traverse());
    console.log(queue.dequeue());
    console.log(queue.size());
    console.log(queue.traverse());
    queue.clear();
    console.log(queue.size());
})();