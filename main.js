//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog() {

}

// Instances of Dog
// Needed: sadie, moonshine, atticus
function Sadie() {
  this.status = "normal"
  this.color = "black"
  this.hungry = false
}
Sadie.prototype = new Dog()
let sadie = new Sadie()

function Moonshine() {
  this.hungry = true
}
Moonshine.prototype = new Dog()
let moonshine = new Moonshine()

function Atticus() {

}
Atticus.prototype = new Dog()
let atticus = new Atticus()

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human(coolstatus) {
  this.cool = coolstatus
}

Human.prototype.pet = function(dog) {
  return dog.status = "happy"
}

Human.prototype.feed = function(dog) {
  return dog.hungry = false
}

// Instances of Human
// Needed: mason, julia

function Julia() {

}
Julia.prototype = new Human(true)
let julia = new Julia()

function Mason() {

}
Mason.prototype = new Human(false)
let mason = new Mason()
