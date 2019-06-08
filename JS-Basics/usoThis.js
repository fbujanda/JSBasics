
// Snipets from You Don't Know JS
/*function foo() {
	console.log( this.a );
};

var obj2 = {
	a: 42,
	foo: foo
};

var obj1 = {
	a: 2,
	obj2: obj2
};

obj2.foo(); // 42*/

/*function baz() {
    // call-stack is: `baz`
    // so, our call-site is in the global scope

    console.log( "baz" );
    bar(); // <-- call-site for `bar`
}

function bar() {
    // call-stack is: `baz` -> `bar`
    // so, our call-site is in `baz`

    console.log( "bar" );
    foo(); // <-- call-site for `foo`
}

function foo() {
    // call-stack is: `baz` -> `bar` -> `foo`
    // so, our call-site is in `bar`

    console.log( "foo" );
}

baz(); // <-- call-site for `baz`*/

/*function foo() {
	console.log( this.a );
}

var a = 2;

foo(); // 2 */

 /*function foo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: foo
};

obj.foo(); // 2*/

/*function foo() {
	console.log( this.a );
}

var obj2 = {
	a: 42,
	foo: foo
};

var obj1 = {
	a: 2,
	obj2: obj2
};

obj1.obj2.foo(); // 42*/

/*function foo() {
	console.log( this.a );
}

function doFoo(fn) {
	// `fn` is just another reference to `foo`
    let a = 20;
	fn(); // <-- call-site!
}

var obj = {
	a: 2,
	foo: foo
};

var a = "oops, global"; // `a` also property on global object

doFoo( obj.foo ); // "oops, global"*/



function Person(name, age, gender, interests) {
	this.name = name,
	this.age = age,
	this.gender = gender,
	this.interests = interests,
	this.bio = function() {
		alert(this.name.first + ' ' + this.name.second + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
	  },
	this.greeting =function() {
		alert('Hi! I\'m ' + this.name['first'] + '.');
	  }
  };

var person1 = new Person({first : 'Bob', second:'Smith'},32,'male',['music', 'skiing']);

console.log(person1.greeting());


