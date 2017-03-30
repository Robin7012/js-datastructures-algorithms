function BinarySearchTree() {
    this.root = null;
}

function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
}
// 插入键
BinarySearchTree.prototype.insert = function (key) {
    var node = new Node(key);
    if (this.root === null) {
        this.root = node;
    } else {
        this.insertNode(this.root, node);
    }
}

BinarySearchTree.prototype.insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            this.insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            insertNode(node.right, newNode);
        }
    }
}
// 查找键
BinarySearchTree.prototype.search = function (key) {
    return this.searchNode(this.root,key);
}
BinarySearchTree.prototype.searchNode = function (node,key) {
    if(node === null) {
        return false;
    }
    if(key < node){
        return this.searchNode(node.left,key);
    }else if(key < node){
       return this.searchNode(node.right,key);
    }else{
        return true;
    }
}

//中序遍历
BinarySearchTree.prototype.inOrderTraverse = function (callback) {
    this.inOrderTraverseNode(this.root, callback);
}
BinarySearchTree.prototype.inOrderTraverseNode = function (node, callback) {
    if (node != null) {
        this.inOrderTraverseNode(node.left, callback);
        console.log(node.key);
        this.inOrderTraverseNode(node.right, callback);
    }
}
//先序遍历
BinarySearchTree.prototype.preOrderTraverse = function (callback) {
    this.preOrderTraverseNode(this.root, callback);
}
BinarySearchTree.prototype.preOrderTraverseNode = function (node, callback) {
    if (node != null) {
        console.log(node.key);
        this.preOrderTraverseNode(node.left, callback);
        this.preOrderTraverseNode(node.right, callback);
    }
}
//后序遍历
BinarySearchTree.prototype.postOrderTraverse = function (callback) {
    this.postOrderTraverseNode(this.root, callback);
}
BinarySearchTree.prototype.postOrderTraverseNode = function (node, callback) {
    if (node != null) {
        this.postOrderTraverseNode(node.left, callback);
        this.postOrderTraverseNode(node.right, callback);
        console.log(node.key);
    }
}
//返回树中最小的键
BinarySearchTree.prototype.min = function () {
    return this.minNode(this.root).key;
}
BinarySearchTree.prototype.minNode = function (node) {
    // if(node != null && node.left != null){
    //     this.minNode(node.left);     
    // }
    // return node;
    var prenode;
    while (node != null) {
        prenode = node;
        node = node.left;
    }
    return prenode;
}

//返回树中最大键
BinarySearchTree.prototype.max = function () {
    return this.maxNode(this.root).key;
}
BinarySearchTree.prototype.maxNode = function (node) {
    if (node) {
        while (node && node.right != null) {
            node = node.right;
        }
        return node;
    }

}
//从树中移除某个键
BinarySearchTree.remove = function (key) {
    this.removeNode(this.root,key);
};
//递归删除
BinarySearchTree.removeNode = function (node,key) {
    if(node == null){
        return false;
    }
    if(key < node.key){
        node = node.left;
        removeNode(node,key);
    }else if(key > node.key){
          node = node.right;
        removeNode(node,key);
    }else{
        //叶子结点
        if(node.left == null &&node.right == null ){
            node = null;
        }
        //只有一个左节点或右节点
        if(node.left == null){
            node = node.left;
        }
        if(node.right == null){
            node = node.right;
        }else{
            var aux = findMinnode(node.right);
            noke.key = aux.key;
            ths.removeNode(node.right,aux.key);
        }
    }
};
/**
 * TEST
 */
;
(function () {
    var tree = new BinarySearchTree();
    tree.insert(11);
    tree.insert(7);
    tree.insert(8);
    tree.insert(3);
    tree.insert(12);
    tree.inOrderTraverse();
    tree.preOrderTraverse();
    tree.postOrderTraverse();
    console.log(tree.min());
    console.log(tree.max());
})();