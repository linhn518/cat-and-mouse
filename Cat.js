function Cat(name){
    this.name = name;
    this.stomach = [];
    console.log('Hi! I am' + this.name);
}

Cat.prototype.eat= function(){
    this.stomach.push(Mouse);
}
Cat('Tom');
module.exports = Cat;

