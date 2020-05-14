function Cat(name){
    this.name = name;
    this.stomach = [];
}

Cat.prototype.eat= function(){
    this.stomach.push(Mouse);
}

Cat('Tom');
module.exports = Cat;

