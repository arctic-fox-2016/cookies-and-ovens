// User Stories:
// 1. As a cook, I need to make multiple types of cakes
// 2. I need to put cake batter in the over
// 3. I need to know when to take the cake from the over so it doesn't get burnt
//
// Answer These Questions:
//
// 1. What are essential classes?
// I need two (2) essential classes: one for the Oven, and one for the CakeFactory.
// I also need classes for each cake flavor.
//
// 2. What attributes will each class have?
// The Oven must have three (3) attributes: Temperature, max capacity, and current capacity
// The CakeFactory doesn't need any attributes, just methods
// The Cake must have these attributes: Amount of batter, flavor, cooking time, cooking temperature, and status
//
// 3. What interface will each class provide?
// Oven can be set at specific temperature, CakeFactory can prepare and bake cakes, while Cakes store baked status and othee cake attributes.
//
// 4. How will the classes interact with each other?
// The CakeFactory creates cakes based on the flavors, while the Oven will bake the cakes only if it's set to the correct temperature and has enough capacity
//
// 5. Which classes will inherit from others, if any?
// Every Cake will inherit from CakeFactory
//
// Your code here

class Oven {
  constructor() {
    this.max_capacity = 8 // Maximum number of cakes
    this.current_capacity = 0 // Current number of cakes
    this.temperature = 0 // Current oven temperature
  }

  set_temperature(number) {
    this.temperature = number
  }
}

class CakeFactory {
  constructor() {
  }

  prepare() {
    this.status = "unbaked"
  }

  bake(oven) {
    if (oven.temperature == this.temperature) {
      this.status = "baked"
    } else if (oven.temperature >= this.temperature) {
      console.log("Oven is too hot!")
    } else if (oven.temperature <= this.temperature) {
      console.log("Oven is not hot enough!")
    }
  }
}

class PeanutButterCake extends CakeFactory {
  constructor() {
    super()
    this.type = "Peanut Butter"
    this.batter = 100 // grams
    this.temperature = 200 // degrees F
    this.time = 30 // minutes
    this.status = "unprepared"
  }
}

class ChocolateCake extends CakeFactory {
  constructor() {
    super()
    this.type = "Chocolate"
    this.batter = 90 // grams
    this.temperature = 225 // degrees F
    this.time = 25 // minutes
    this.status = "unprepared"
  }
}

let oven = new Oven()
let peanut_butter_cake = new PeanutButterCake()
peanut_butter_cake.prepare()
oven.set_temperature(200)
peanut_butter_cake.bake(oven)
console.log(peanut_butter_cake)
