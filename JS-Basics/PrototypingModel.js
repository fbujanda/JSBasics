/* //Tomado del video de Youtube de James Shore 
//https://youtu.be/PMfcsYzj-9M  MODELO FUNCIONAL PROTOTYPE

let answerPrototype = {
    constructor: function fn0(value){
        this._val = value;

    } ,
    get: function fn1() {
        return this._val;

    }
}

let lifeAnswer = Object.create(answerPrototype);
lifeAnswer.constructor(42);
lifeAnswer.get();

let dessertAnswer = Object.create(answerPrototype);
dessertAnswer.constructor(3.1416);
dessertAnswer.get();

let FirmAnswerPrototype = Object.create(answerPrototype);
FirmAnswerPrototype.get = function fn2() {
    return answerPrototype.get.call(this)+"!!";
}

let LuckyAnswer = Object.create(FirmAnswerPrototype);
LuckyAnswer.constructor(7);
LuckyAnswer.get();

let MagicAnswer = Object.create(FirmAnswerPrototype);
MagicAnswer.constructor(3); */

//Tomado del video de Youtube de James Shore 
//https://youtu.be/PMfcsYzj-9M  MODELO CLASICO
//La classe es el objeto que tiene la función constructor que guarda la propiedad
/* function Answer(value) {
    this._val = value;

}

Answer.prototype.get = function fn1() {
    return this._val;
}

let lifeAnswer = new Answer(42);
lifeAnswer.get();

let dessertAnswer = new Answer(3.1416);
dessertAnswer.get();

function FirmAnswer(value) {
    Answer.call(this, value);
}
FirmAnswer.prototype = Object.create(Answer.prototype);
FirmAnswer.prototype.constructor = FirmAnswer;

FirmAnswer.prototype.get = function fn2() {
    return Answer.prototype.get.call(this) + "!!";
}

let luckyAnswer = new FirmAnswer(7);
luckyAnswer.get();

let magicAnswer = new FirmAnswer(3);
magicAnswer.get(); */

/* // Mosh: El esquema de clasico es un constructor que retorna un objeto que incluye 
// propiedades y métodos. Describe también un Factory de objeto que es un constructor
// pero que para la creación de objetos no emplea la palabra clave new. Una variante
// más nueva es como el ejemplo que incluye getter https://youtu.be/PFmuCDHHpwk

function stopWatch() {
    let startTime, endTime = null;
    let duration, running = 0 ;

    this.start = function() {
        if (running)
          throw new Error ("Reloj ya iniciado");
        
        running = true;
        startTime = new Date();
    };
    this.stop = function() {
        if (!running)
          throw new Error ("Reloj ya detenido");

        running = false;
        endTime = new Date();
        seconds = (endTime.getTime() - startTime.getTime())/1000 ;
        duration +=seconds;
    };
    this.reset = function() {
        startTime = null;
        endTime = null;
        duration = 0;
        running = false;

    }
    Object.defineProperty(this, "duration",{
        get: function() {return duration ;}
    });

} */

//Un esquema más nuevo (ES6) es el que se presenta aquí en los proximos (3) snippets
// 1.- Objeto literal. Propiedades y métodos

/*let userOne = {
    name: "Fidias",
    email: "fidiasbujanda@gmail.com",
    login() {
        console.log(this.email, "has logged in");
    },
    logout() {
        console.log(this.email, "has logged out");
    }
};*/

// 2.- Creación de objetos mediante class

class User {
    constructor(email,name) {
        this.email = email;
        this.name = name;
        this.score = 0;

    }
    login() {
        console.log(this.email, "has logged in");
        return this;
    }
    logout() {
        console.log(this.email, "has logged out");
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.email, "Score is now", this.score)
        return this;
    }
}

let userOne = new User("fidiasbujanda@gmail.com","Fidias");
let userTwo = new User("cabi2002@gmail.com","Cabi");

class Admin extends User {
    delete(user) {
        users = users.filter(u => {
            return u.email != user.email ;
        })
    }
}

let admin = new Admin("fidiasbujanda@hotmail.com","SuperU");
let users = [userOne, userTwo, admin];
// new: crea un objeto nuevo y vacío
// fija 'this' a ese objeto nuevo
// llama y ejecuta al constructor
