/*//Tomado de la página Stack overflow
function saludar(callback) {
	let mensaje = 'Hello world'
	callback(mensaje)
}

saludar(function(str) {
	console.log('Callback invocado!')
	console.log(str)
})

saludar(function(str) {
	str = 'Param cambiado :o'
	console.log('Otro callback invocado!')
	console.log(str)
})*/

let x = function() {
    console.log("I'm called from inside a function");

};

let y = function(callback) {
    console.log('do something');
    callback();
};

y(x);
