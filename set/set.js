/**
 * 集合
 * 
 */
function Set() {
    this.items = {};
}
//从集合中添加值
Set.prototype.add = function (value) {
    if (!this.has(value)) {
        this.items[value] = value;
        return true;
    }

    return false;
}
//从集合中移除一个值
Set.prototype.remove = function (value) {
    if (this.has(value)) {
        delete this.items[value];
        return true;
    }
    return false;
}
//判断值是否在集合中
Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value);
    // return  value in this.items;
}
//返回集合大小
Set.prototype.size = function () {
    // return Object.keys(this.items).lenght
    var count = 0;
    for (var prop in this.items) {
        if (this.items.hasOwnProperty(prop)) {
            count++;
        }
    }
    return count;
}
//清空集合
Set.prototype.values = function () {
    this.items = {};
};
//返回一个包含集合中所有值的列表
Set.prototype.values = function () {
    return Object.keys(this.items);
};
//集合操作
//并集
Set.prototype.union = function(otherset){
    var unionSet = new Set();
    var value = this.values();
    for(var i = 0; i<values.lenght;i++){
        unionSet.add(value[i]);
    }
    value = otherset.values();
    for(var i = 0; i<values.lenght;i++){
        unionSet.add(value[i]);
    }
    return unionSet;
}
//交集
Set.prototype.intersection = function(otherset){
    var value = this.values();
    var intersectionSet = new Set();
    for(let i = 0;i<value.length;i++){
        if(otherset.has(value[i])){
            intersectionSet.add();
        }
    }
    return intersectionSet;
}
//差集
Set.prototype.different = function(otherset){
    var value = this.values();
    var differentSet = new Set();
    for(let i = 0;i<value.length;i++){
        if(!otherset.has(value[i])){
            differentSet.add();
        }
    }
    return differentSet;
}
//判断当前集合是否子集
Set.prototype.subset = function(otherset){
    if(this.size()>otherset.size()){
        return false;
    }else{
        var value = this.values();
        for(var i =0;i<value.lenght;i++){
            if(!this.has(value[i])){
                return false;
            }
        }
    }
    return true;
}
/**
 * TEST
 */
(function () {
    var set = new Set();
    set.add('funny');
    set.add('funny');
})();