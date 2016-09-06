// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here

class Store {
  constructor(name){
    this._name = name
    this._listOfCookies = []
  }

  get name(){
    return this._name
  }

  set name(value){
    this._name = value
  }
  get listOfCookies(){
    return this._listOfCookies
  }

  addCookies(value){
    this._listOfCookies.push(new ChocoChips(value["name"], value["hasFrosting"],value["ovenTime"],
      value["frostingTime"], null, null
    ))
  }
}


class Cookie {
  constructor(name, hasFrosting, ovenTime, frostingTime) {
    this._name = name
    this._hasFrosting = hasFrosting || false
    this._ovenTime = ovenTime || 30
    this._frostingTime = frostingTime || 5
  }

  get name(){
    return this._name
  }

  set name(value){
    this._name = value
  }


  get hasFrosting(){
    return this._hasFrosting
  }

  set hasFrosting(value){
    hasFrosting = value
  }

  get ovenTime(){
    return this._ovenTime
  }

  set ovenTime(value){
    ovenTime = value
  }

  get frostingTime(){
    if (this.hasFrosting) {
      return this._frostingTime
    } else {
      return 0
    }
  }

  set frostingTime(value) {
    this.frostingTime = value
  }

  finishTime(){
    if (!this.hasFrosting) {
      return this._ovenTime
    } else {
      return this._ovenTime + this._frostingTime
    }
  }

  bakingStatus(value){
    if (value > this.ovenTime) {
      return "Over Baked"
    } else if (value == this.ovenTime) {
      return "Perfectly Baked! <3"
    }

    return "Still Raw :("
  }

}

class ChocoChips extends Cookie{
  constructor(name, hasFrosting, ovenTime, frostingTime, type, cookieStatus){
    super(name, hasFrosting, ovenTime, frostingTime)
    this._type = type || "Choco"
    this._cookieStatus = cookieStatus || "Raw"
  }
}

function reset_board() {
   console.log("\x1B[2J")
}

let ourStore = new Store("I <3 Cookies by Lily")
let tempCookies = new ChocoChips()

reset_board()
console.log("\n\n\n-------------------------------")
console.log(`Welcome to ${ourStore.name}`)
console.log("--------------------------------\n\n\n\n")

console.log("Our available Cookies for today :\n")


tempCookies = {
  "name" : "ChocoChips Cookies",
  "hasFrosting" : false,
  "ovenTime" : 25,
  "frostingTime" : 0,
  "type" : "Choco",
  "cookieStatus" : "Raw"
}

ourStore.addCookies(tempCookies)

tempCookies = {
  "name" : "Strawberry Cookies",
  "hasFrosting" : true,
  "ovenTime" : 30,
  "frostingTime" : 5,
  "type" : "plain",
  "cookieStatus" : "Raw"
}

ourStore.addCookies(tempCookies)

tempCookies = {
  "name" : "AlmondChoco Cookies",
  "hasFrosting" : false,
  "ovenTime" : 40,
  "frostingTime" : 0,
  "type" : "plain",
  "cookieStatus" : "Raw"
}

ourStore.addCookies(tempCookies)

for (var i = 0; i < ourStore.listOfCookies.length ; i++) {
  tempCookies = ourStore.listOfCookies[i]
  console.log(`${tempCookies.name} \t waiting time : ${tempCookies.finishTime()} \tBaking Status : ${tempCookies.bakingStatus(Math.random()*50)} `)
}

console.log(`\n`)

console.log("\n\n\n\n")
