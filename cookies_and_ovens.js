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

function print(status = null) {
  for (let idx = 0; idx < 50; idx++) {
    console.log("\n\n\n")
  }
  console.log("\t+--------------------+")
  console.log("\t|                    |")
  console.log("\t|    I <3 COOKIES    |")
  console.log("\t|       BAKERY       |")
  console.log("\t|                    |")
  console.log("\t+--------------------+")
  console.log("\t+- - - WELCOME! - - -+")
  console.log("\n\n\n")
  if (status) {
    console.log(status)
    console.log("\n\n\n")
  }
}

class Cookies {
  constructor(property = {}) {
    this._name = property["name"];
    this._isOven = false;
    this._isBaked = false;
  }
  set name(value) {
    this._name = value;
  }
  get name() {
    return this._name;
  }
  set isOven(value) {
    this._isOven = value;
  }
  get isOven() {
    return this._isOven;
  }
  set isBaked(value) {
    this._isBaked = value;
  }
  get isBaked() {
    return this._isBaked;
  }

  check_backed_status() {
    if (this.isBaked) return true;
    return false;
  }

  stack_to_oven() {
    this.isOven = true;
    return true;
  }

  take_from_oven() {
    this.isOven = false;
    return true;
  }
}

class Baker {
  constructor(property = {}) {
    this._name = property["name"];
    this._cook = false;
  }
  set name(value) {
    this._name = value;
  }
  get name() {
    return this._name;
  }
  set cook(value) {
    this._cook = value;
  }
  get cook() {
    return this._cook;
  }
  start_bake(property = {}) {
    this._cook = true;

    let cookie = new Cookies({
      name: property["name"],
      cooking_time: property["cooking_time"]
    });

    cookie.stack_to_oven()

    let pointer = this;

    function process(index = 0) {
      let string_status;
      let timeout = 1000;
      if (index == 0) {
        string_status = "Hi! i'm " + pointer.name + " your baker for today and i will make a " + cookie.name + " for you!";
        timeout = 2000;
      } else if (index == 1) {
        string_status = "So, Let's Bake!";
      } else if (index == 2 || index == 5 || index == 8) {
        string_status = "zzzz ."
        timeout = 500;
      } else if (index == 3 || index == 6 || index == 9) {
        string_status = ".."
        timeout = 500;
      } else if (index == 4 || index == 7 || index == 10) {
        string_status = "..."
        timeout = 500;
      } else if (index == 11) {
        let random_status = [true, false]
        cookie.isBaked = random_status[Math.floor(Math.random() * random_status.length)];
        string_status = "Ding!";
        cookie.take_from_oven()
        if (cookie.isBaked) {
          string_status += " your cookie ready to serve"
        } else {
          string_status += " Opps.. your cookie is burnt out"
        }
      }

      print(string_status)
      setTimeout(function () {
        if (index == 11) {
          return true;
        } else {
          return process(index + 1)
        }
      }, timeout);
    }
    process(0);
  }
}

let baker_1 = new Baker({
  name: "John Doe"
});

let cookies_list = ["Kue Kacang", "Nastar", "Bolu"];

print();
setTimeout(function () {
  baker_1.start_bake({
    name: cookies_list[Math.floor(Math.random() * cookies_list.length)]
  });
}, 500)
