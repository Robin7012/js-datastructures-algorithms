/**
 * LIFO
 * js数组实现的是链栈
 */
function Stack() {
    this.items = [];
}
// 添加一个或几个元素到栈顶
Stack.prototype.push = function (ele) {
    this.items.push(ele);
};
// 移除栈顶的元素，同时返回被移除的元素
Stack.prototype.pop = function () {
    return this.items.pop();
};
// 返回栈顶的元素同时不做任何修改
Stack.prototype.peek = function () {
    return this.items[this.items.length - 1];
};
// 判断栈是否为空
Stack.prototype.isEmpty = function () {
    return this.items.length == 0;
};
// 清空栈
Stack.prototype.clear = function () {
    this.items.length = 0;
    //this.items = [];
};
// 返回当前栈大小
Stack.prototype.size = function () {
    return this.items.length;
};
//遍历栈中所有元素
Stack.prototype.traverse = function () {
    console.log(this.items.join(' '));
};
/**
 *TEST
 * 
 */
//立即执行函数前加分号避免解析错误
;
(function () {

    var stack = new Stack();
    console.log(stack.isEmpty()); //栈空 true
    stack.push(7);
    stack.push(0);
    stack.push(1);
    stack.push(2);
    console.log(stack.peek()); //返回栈顶元素
    console.log(stack.size()); //返回栈大小
    console.log(stack.isEmpty());
    stack.pop();
    stack.pop();
    console.log(stack.peek()); //返回栈顶元素
    console.log(stack.size()); //返回栈大小
    stack.traverse(); //遍历栈中所有元素
})();

/**
 *进制转换
 * 
 */
function aryChange(num,ary){
    let stack = new Stack();
    let result = parseInt(num / ary);
    let remainder = num % ary ;
    let str = '';
    let digits = '0123456789ABCDEF'
    while(result){
        stack.push(remainder);
        remainder = result % ary ;
        result = parseInt(result / ary);
    }
    stack.push(remainder);
    while(!stack.isEmpty()){
        str += digits[stack.pop()];
    }
    console.log(str);
}

aryChange(13,16);