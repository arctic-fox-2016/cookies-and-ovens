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


class Cookie {
  constructor(property = {}){
    this._name = property ["name"];
    this._cookingTime = property ["cookingTime"] || 0;
    this._isOven = false
    this._isBaked = false
  }

  set name(value){ this._name = value; }
  get name(){ return this._name; }
  set cookingTime(value){ this._cookingTime = value; }
  get cookingTime(){ return this._cookingTime; }
  set isOven(value){ this._isOven = value; }
  get isOven(){ return this._isOven; }
  set isBaked(value){ this._isBaked = value; }
  get isBaked(){ return this._isBaked; }

  stacktoOven(){
    this.isOven = true;
    return true;
  }

  takefromOven(){
    this.isOven = false
  }

}

class Baker{
  constructor(property = {}){
    this._name = property ["name"]
    this._cook = false
  }
  set name(value){ this._name = value; }
  get name(){ return this._name; }
  set cook(value){ this._cook = value; }
  get cook(){ return this._cook; }

  start_bake(property = {}){
    this.cook = true;
    console.log("start!")
    let cookie = new Cookie({
      name : property["name"],
      cookingTime : property["cookingTime"]
    });
    cookie.stacktoOven();

    var time_baking = 0;

    var x = setInterval(function(){
      if(time_baking == cookie.cookingTime){
        clearInterval(x);
        console.log(cookie.name + " Done!");
        cookie.takefromOven();
      } else {
        console.log("Cooking...")
        time_baking += 1;
      }
    }, 1000);
  }
}

let baker_1 = new Baker({
  name : "Fabio"
});

baker_1.start_bake({
  name: "Kue Keju",
  cookingTime: 8
})
