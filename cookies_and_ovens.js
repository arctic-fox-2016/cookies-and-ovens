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
class Cookies {
  constructor(property = {}){
    this._name = property["name"]
    this._bakeTime = property["bakeTime"]
    this._dough = property["dough"]
    this._topping = property["topping"]
  }
  set name(value){this._name = value}
  get name(){return this._name}
  set bakeTime(value){this._bakeTime = value}
  get bakeTime(){return this._bakeTime}
  set dough(value){this._dough = value}
  get dough(){return this._dough}

  cekMatang(value){
    if (this._bakeTime < value) {
      return ` ${this._name} ini belum matang`
    } else { return `${this._name} ini telah matang`}
  }

  cekAdonan(value){
    if (value < this._dough){
      return ` Adonan ${this._name} belum sempurna, atur hingga sesuai takaran`
    } else { return ` Adonan Sempurna`}
  }
}


class peanutCookies extends Cookies {
  constructor(property ={}){
    super(property)
    this._peanutBakeTime = 120
    this._peanutDough = 200
  }
}

class chocolateCookies extends Cookies {
  constructor(property ={}){
    super(property)
    this._chocolateBakeTime = 90
    this._chocolateDough = 250
  }
  cekMatang(){
    return super.cekMatang(this._chocolateBakeTime)

  }
  cekAdonan(){
    console.log(` Adonan standard : ${this._chocolateDough}`);
    console.log(` Adonan kue saat ini : ${this._dough}`);
    return super.cekAdonan(this._chocolateDough)
  }
}

class cheeseCookies extends Cookies {
  constructor(property ={}){
    super(property)
    this._cheeseBakeTime = 80
    this._cheeseDough = 150
  }
  cekMatang(){
    return super.cekMatang(this._cheeseBakeTime)

  }
  cekAdonan(){
    console.log(` Adonan standard : ${this._cheeseDough}`);
    console.log(` Adonan kue saat ini : ${this._dough}`);
    return super.cekAdonan(this._cheeseDough)
  }
}

let coklat = new chocolateCookies()
coklat._name = "kue coklat"
coklat._bakeTime = 100
coklat._dough = 300
coklat._topping = "chocochip"

let keju = new cheeseCookies()
keju._name = "kue keju"
keju._bakeTime = 200
keju._dough = 150
keju._topping = "mozarella"

console.log(coklat.cekMatang())
console.log(coklat.cekAdonan())
console.log(keju.cekMatang())
console.log(keju.cekAdonan())
