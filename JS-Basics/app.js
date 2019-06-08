/* // Del curso Udacity ud-015. Programación de Objetos JavaScript. CIERRES
// CLOSURES
var aHero = function() {
    console.log(this);
    return ['Hero1', 'Hero2', 'Hero3','Hero4', 'Hero5'][Math.floor(Math.random() * 3)];
}; 
var aFoil = function() {
    console.log(this);
    return ['Rat', 'ET', 'Canguro','Rabipelao'][Math.floor(Math.random() * 3)];
};
var aDeed = function() {
    console.log(this);
    return ['Come', 'Baila', 'Escribe', 'Estudia'][Math.floor(Math.random() * 3)];
};

let sagas =[];
let hero = aHero;
let newSaga = function() {
    let foil = aFoil();
    
    sagas.push(function() {
        let deed = aDeed();
        console.log(hero()+' '+deed+' '+foil);


    } ) ;

};
newSaga();
console.log(sagas);
console.log(sagas[0]());
console.log(sagas[0]());
console.log(sagas[0]());
newSaga();
console.log(sagas);
console.log(sagas[1]());
console.log(sagas[1]()); */

// ud-015. Programación de Objetos JavaScript. PROTOTYPE CHAINS

/* var gold = {a:1};
var rose = Object.create(gold); 
// Crea un objeto vacío. Y su rol (gold) es ser
// la referencia de búsqueda en la cadena prototypo. El nuevo objeto creado Adopta 
// las propiedades del objeto gold y este a su vez del Object Prototype de Madre
// El objeto Madre es Object. Create es un método de ese Object
// Object Prototype: es una propiedad que es un objeto del objeto Madre Object. 
// lo tanto posee propiedades y métodos básico que son delegados a
// todos los demás objetos por la via del chain. por ejemplo .constructor
// El constructor es una propiedad del Object Prototype que apunta a la función 
// creadora de todos los objetos. Es una función (que es un objeto)  distinta al 
// Object Prototype.

console.log(rose);
rose.b = 2;
console.log(rose.a);
console.log(rose.b);
console.log(rose.c); */



// ud-015. Programación de Objetos JavaScript. Object DECORATOR PATTERNS

/* var carLike = function(obj, loc) {
    obj.location = loc;
    obj.move = function() {
        obj.location++;
    };
    return obj ;
}
var ami = carLike({},9);
ami.move();
var ben = carLike({},2); */

// ud-015. Programación de Objetos JavaScript. FUNCTIONAL CLASSES
// Se crearán objetos a partir de funciones. Estas funciones son como fábricas
// o factorías que producen flotas de objetos similares. La diferencia entre 
// factorías y decoradores de objeto es clara. En el deco la función recibe el 
// objeto en la factoría lo crea. A este tipo de funciones se les denomina 
// constructores y el nombre comienza con MAYúscula. A este proceso en OOP se le
// llama functional class pattern

// Functional shared pattern. El método move  Se coloca fuera de la creación del 
// objeto (la fábrica) y muy importante se declara como una propiedad de la función
// (es un objeto especializado) y es otro objeto que se le pueden agregar otras 
// funciones key: value(función). Esta separación del método optimiza memoria 
// al no quedar grabada con cada instanciación ahora es posible un sólo método para
// todas las instancias

/* var CarLike = function(location) {
    var obj ={location};
    extend(obj, CarLike.methods); // Crea las keys de métodos. Y el código en Carlike.methods
    return obj ;
}
CarLike.methods = {
   move: function() {
           this.location++;
        }
}

function extend(obj, parent) {
    for (var prop in parent) {
     obj[prop] = parent[prop];
    }
  }

var ami = CarLike(9);
ami.move();
var ben = CarLike(2); */

// ud-015. Programación de Objetos JavaScript. PROTOTYPAL CLASSES. Clases via
// prototipo. Una Mejora es suprimir el extend y hacer uso del prototype chain de
// manera que la instancia no tenga consigo esos métodos pero pueda contar con
// ellos por delegación del objeto Carlike.methods

/* var CarLike = function(location) {
     var obj = Object.create(CarLike.methods) ;
    obj.location =location;

    return obj ;
}
CarLike.methods = {
   move: function() {
           this.location++;
        }
}

// A este esquema se le llama complete prototypal pattern of writing a Class. Y 
// consiste de una función que permita crear instancias, una delegación del objeto
// nuevo a un objeto prototipo y las maneras de incrementar las propiedades y
// métodos

var ami = CarLike(9);
ami.move();
var ben = CarLike(2); */

// Ese esquema fue tan difundido que fue incorporado al lenguaje JS. La incorporación
// al lenguaje se fundamenta en la creación inmediata de un objeto cada vez que se crea
// una función (function prototype). Piense que Carlike.methods es un contenedor de 
// métodos y que está puesto como propiedad de la función es prácticamente lo mismo
// Refaccionando el código queda:

var Car = function(location) {
    var obj = Object.create(Car.prototype) ;
    obj.location =location;

    return obj ;
}
Car.prototype.move = function() {  // objeto ad-hoc contenedor: Car.prototype
           this.location++;
        };

var ami = Car(9);
ami.move();
var ben = Car(2);
ami.move();
ben.move();
// El objeto Car.prototype tiene dos métodos move y constructor
console.log(Car.prototype.move);
console.log(Car.prototype.constructor); // Es un objeto de quién? de Car
// constructor es un método. Se puede crear una instancia con el
let feb = Car.prototype.constructor(7);
console.log(ami instanceof Car) // Pregunta si el objeto Car.prototype está 
// en la cadena de prototypo del objeto ami  


// ud-015. Programación de Objetos JavaScript. PSEUDOCLASSICAL PATTERNS
// Este modelo incluye una fina capa de refinamiento respecto al prototypal classes
// Al incorporar la clave new en la creación de un objeto añade automáticamente 
// dos lineas de código: primero el parámetro this es asignado al objeto nuevo creado
// this = Object.create(Car.prototype) y al final return this. Entonces el código re-
// mozado es:

/* var Car = function(location) {
    obj.location =location;
}

Car.prototype.move = function() {  // objeto ad-hoc contenedor: Car.prototype
           this.location++;
        };

var ami =  new Car(9);
ami.move();
var ben = new Car(2);
ami.move();
ben.move(); */

/* let n = 8;

function functionOne() {
  let n = 9;

  function functionTwo() {
    let n = 10;
    console.log(n);  // First log
  }

  functionTwo();

  console.log(n);  // Second log
}

functionTwo();

//console.log(n);  */
