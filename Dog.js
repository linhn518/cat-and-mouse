var Chalk = require('chalk');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

function Dog(name){
    this.name= name;
    this.stomach= [];
    console.log('I am a Dog. My name is '+ Chalk.blue(this.name));
}

var pug = new Dog('Pug');
var tom = new Cat('Tom');
var jerry = new Mouse('Jerry');

Dog.prototype.eat = function(){
    this.stomach.push(Mouse);
}

Dog('Pug');

module.exports= Dog;