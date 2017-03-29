/**
 * 单向链表
 * 
 */
function LinkedList() {
    this.length = 0;
    this.head = null;
    //结点
}

function Node(ele) {
    this.data = ele;
    this.next = null;
}
//向列表尾部添加新的项
LinkedList.prototype.append = function (ele) {
    var node = new Node(ele); //构造结点
    var current;
    if (this.head === null) {
        this.head = node;
    } else {
        current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    this.length++;
}
//向列表特定位置添加新的项
LinkedList.prototype.insert = function (index, ele) {
    var node = new Node(ele);
    var temp;
    if (index < 0 || index > this.length) {
        return false;
    }
    if (index == 0) {
        temp = this.head;
        this.head = node;
        node.next = temp;
    } else {
        let current;
        current = this.head;
        for (let i = 1; i < index; i++) {
            current = current.next;
        }
        temp = current.next;
        current.next = node;
        node.next = temp;
    }
    this.length++;
}
//从列表中移除一项
LinkedList.prototype.remove = function () {
    let current = this.head;
    if (current) {
        for (let i = 1; i < this.length; i++) {
            current = current.next;
        }
        current.next = null;
    }
    this.length--;
}
//返回元素在列表中的索引(位序)，没有返回-1
LinkedList.prototype.indexOf = function (ele) {
    var node = new Node(ele);
    var index = -1;
    current = this.head;
    while (current) {
        index++;
        if (current.data === node.data) {
            break;
        }
        current = current.next;
    }
    return index;
}
//从列表特定位置移除一项
LinkedList.prototype.removeAt = function (index) {
    var temp;
    if (index < 0 || index > this.length) {
        return false;
    } else if (index = 0) {
        let current;
        current = this.head;
        this.head = current.next;
    } else {
        for (let i = 1; i < index; i++) {
            current = current.next;
        }
        current.next = current.next.next;
    }
    this.length--;
}
//判空
LinkedList.prototype.isEmpty = function () {
    return this.length == 0;
}
//返回列表包含的个数
LinkedList.prototype.size = function () {
    return this.lenght;
};
//遍历列表
LinkedList.prototype.traverse = function () {
    var current;
    var str = ''
    if (this.head !== null) {
        current = this.head;
        while (current) {
            str += current.data;
            current = current.next;
        }
        console.log(str);
    }
};
(function () {

    var linkedList = new LinkedList();
    linkedList.append(7);
    linkedList.append(0);
    linkedList.append(1);
    linkedList.append(2)
    linkedList.traverse();
    linkedList.insert(1, 2);
    linkedList.remove();
    linkedList.traverse();
    linkedList.removeAt(2);
    linkedList.traverse();
    console.log(linkedList.indexOf(7));
})();