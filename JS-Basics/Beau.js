/* var myCar = new Object();
myCar.marca = "Ford";
myCar.model = "Mustang";
myCar.color;
console.log(myCar.model);
console.log(myCar.color);
myCar["year"] = "1997";
console.log(myCar["marca"], myCar["year"]);

function showProps(obj, objName) {
    var result = "";
    for (var i in obj) {
      // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
      if (obj.hasOwnProperty(i)) {
        result += objName + "." + i + " = " + obj[i] + "\n";
      }
    }
    return result;
  }
  console.log(showProps(myCar, "myCar")); 
  // Creation: object initializer
var myHonda = {color: "red", wheels: 4, engine: {cylinders: 4, size: 2.2}};


// Creation: constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var mycar = new Car("Chevy", "Malibu", 1993);
var anothercar = new Car("Mazda", "Miata", 1990);
console.log(mycar.model);
mycar.color = "black";
console.log(mycar.color);

// Creation: Object.create
var Animal = {
  type: "Invertebrates", 
  displayType: function() {  
    console.log(this.type);
  }
}

var animal1 = Object.create(Animal);
animal1.displayType(); 

var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType();  */

/*var Car = function(loc) {
  var obj = {loc : loc};
  obj.move = move;
  return obj ;

};

var move = function() {
  this.loc++;
};*/

function extend (obj, parent) {
  for (var prop in parent) {
   obj[prop] = parent[prop];
  }
}

var Car = function(loc) {
  var obj = {loc : loc};
  extend(obj, Car.methods);
  return obj ;
};
Car.methods = { move : function() {
  this.loc++;
}

};

var move = function() {
  this.loc++;
};

var auto1 = Car(1);
auto1.move();
var auto2 = Car(9);
auto2.move();