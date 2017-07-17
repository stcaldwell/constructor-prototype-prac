//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (status, color, hungry, owner) {
  this.status = status;
  this.color = color;
  this.hungry = hungry;
  this.owner = owner;
}

Dog.prototype.color = function(color) {
  this.color = color;
}


var sadie = new Dog('normal', 'black', false);
var moonshine = new Dog('normal', 'black', true);
var atticus = new Dog();
// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
  this.pet = function(Dog){
    Dog.status = 'happy';
  }
  this.feed = function(Dog){
    Dog.hungry = false;
  }
  this.cool = cool || false;
}

var mason = new Human();
var julia = new Human(true);
// Instances of Human
// Needed: mason, julia
