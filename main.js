//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (hungry,color,status,owner) {
  this.name = this
  this.hungry = hungry
  this.color = color
  this.status = status
  this.owner = owner
}

// Dog.prototype.pet = function(dog) {
//   return dog.status = "happy"
// }

const sadie = new Dog(false, "black", "normal", undefined)
const moonshine = new Dog(true, "purple", "normal", undefined)
const atticus = new Dog(true, "silver", "normal", undefined)

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human(cool) {
  this.name = this
  this.cool = cool
}

Human.prototype.pet = function(dog) {
  return dog.status = "happy"
}

Human.prototype.feed = function(dog) {
  return dog.hungry = false
}

// Instances of Human
// Needed: mason, julia

const mason = new Human(false)
const julia = new Human(true)
