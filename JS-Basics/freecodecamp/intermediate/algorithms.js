/* Rutina de almacenar las propiedades propias de un OBJETO OWNPROPERTY
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
// Para las propiedades propias y las del constructor
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]
// Cambio del Objeto protoptype ligado a cualquier objeto
function Dog(name) {
  this.name = name; 
}

// Modify the code below this line
Dog.prototype = {
  constructor : Dog, // No puede olvidarse
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom"); 
  }, 
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
*/
//Sum All Numbers in a Range
/* function sumAll(arr) {
  if (arr[1] <= arr[0])  arr.reverse() ;
  let sum = 0;
  
  //arr[0] <= arr[1] ? [a,b] = arr : [a,b] = arr.reverse() ;
  
  let [a,b] = arr;
    for (let i = a; i <= b; i++){
      sum += i ;

    }
    return sum;
  }
  
  sumAll([1, 4]);

  sumAll([1, 4]) //should return 10.
  sumAll([4, 1]) //should return 10.
  sumAll([5, 10]) //should return 45.
  sumAll([10, 5]) //should return 45. 

// Diff Two Arrays 
/* Compare two arrays and return a new array with any items only found in
 one of the two given arrays, but not both. In other words, return the 
 symmetric difference of the two arrays.
*/

  /*function diffArray(arr1, arr2) {
    var newArr = [];
    for (let i = 0; i < arr1.length ; i++ ) {
      if (arr2.indexOf(arr1[i]) === -1 ) {
        newArr.push(arr1[i]) ;

      }
        
    }
    
    for (let i = 0; i < arr2.length ; i++ ) {
      if (arr1.indexOf(arr2[i]) === -1 ) {
        newArr.push(arr2[i]) ;

      }
    }
    // Same, same; but different.
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));  */

//Seek and Destroy
/* You will be provided with an initial array (the first argument in the 
    destroyer function), followed by one or more arguments. Remove all 
    elements from the initial array that are of the same value as these arguments.
*/
/*function destroyer(...arr) {
    // Remove all the values

    for (let i = 1 ; i < arr.length ; i++ ) {
      while (arr[0].indexOf(arr[i]) !== -1){
       
        arr[0].splice(arr[0].indexOf(arr[i]), 1);
      }
      
    } 
    return arr[0];
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));*/
/*
Make a function that looks through an array of objects (first argument) and returns
an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from 
the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the 
second argument is { last: "Capulet" }, then you must return the third object from 
the array (the first argument), because it contains the name and its value, that 
was passed on as the second argument.

Remember to use Read-Search-Ask if you get stuck. Write your own code. */
/*********************************
  function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    let keys = Object.keys(source);
    console.log(keys);
    arr = collection.filter(function(obj){
      for(var i = 0; i < keys.length; i++) {
        if(!obj.hasOwnProperty(keys[i]) || obj[keys[i]] !== source[keys[i]]) {
          return false;
        }
      }
      return true;
        
      
    });
    // Only change code above this line
    //return console.log(arr);
    return arr;
  }
  
  //whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });  
  //whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); 
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
  **********************/
/*

spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".
*/
/*
  function spinalCase(str) {
    str = str.replace(/(_|-)/g, ' ').replace(/\B([A-Z])/g, ' $1').
    replace(/[A-Z]/g, u => u.toLowerCase()).replace(/\s/g, "-");
    return str;
       
    }
  
console.log(spinalCase("AllThe-small Things"));
console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("ThisIsSpinalTap"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("The_Andy_Griffith_Show"));
 */   
  
/*
Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
Should handle words where the first vowel comes in the end of the word.
Should handle words without vowels.
*/
 
/*

 function translatePigLatin(str) {
    let arr = ["A","a","E","e","I","i","O","o","U","u"];
    let letter = str.slice(0,1);
    let i = 1 ;
    if (arr.indexOf(letter) !== -1) {
      str = str.slice(0,str.length) + "way"; 
    } else {
      for ( i = 0; i < str.length; i++){
        if (arr.indexOf(str[i]) !== -1){
            str = str.slice(i, str.length) + str.slice(0, i) + "ay";
            
            break;  }
         }
       if (i >= str.length) str = str + "ay";
    }
    
    return str;
  }
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("rhythm"));
console.log(translatePigLatin("eigth")); */
/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after)
Note
Preserve the case of the first character in the original word when you are 
replacing it. For example if you mean to replace the word "Book" with the word
 "dog", it should be replaced as "Dog"

 myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".
*/
/******************
function sustituto(word,replace) {
  replace = word[0] === word[0].toUpperCase() ? replace[0].toUpperCase() + replace.substring(1) :
  replace[0].toLowerCase() + replace.substring(1) ;

  return replace;
}
function myReplace(str, word, replace) {
  let final = "";
  
  if (str.indexOf(word) !== -1) {
    final = str.slice(0,str.indexOf(word))  + sustituto(word ,replace) + 
    str.slice(str.indexOf(word)+word.length,str.length );

  }

return final;
}

console.log(myReplace("His name is tom", "tom", "John"));

*******/
/*
Intermediate Algorithm Scripting: Sum All Primes
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.*/
/****************
function sumPrimes(num) {
  //let arr = [...Array(num).keys()];
  let arr = rango(2,num);
  let result = primos(arr).reduce((suma, currentValue) =>{return suma+=currentValue }, 0);
  
  return result;
}
function primos(arr) {
  let result = arr.reduce((primes, currentValue, index, vector) => {
    if ( esPrimo(currentValue) ) {
      primes.push(currentValue);
    }
    return primes;
  }, [])
  return result
}
function rango(a = 1,b){
  let arr = [];
  for (let i = a; i <= b; i++){
    arr.push(i);
  }
  return arr;
}
//console.log(rango(2,10));
 function esPrimo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}

//console.log(esPrimo(3));
//console.log(primos(rango(2,19)));
//console.log(sumPrimes(977));
//sumPrimes(20); // a number.
//console.log(sumPrimes(10)); // 17.
//sumPrimes(977) // 73156.

 ******* */






/*
Find the smallest common multiple of the provided parameters that can be evenly 
divided by both, as well as by all sequential numbers in the range between these
parameters.
The range will be an array of two numbers that will not necessarily be in numerical 
order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 
that is also evenly divisible by all numbers between 1 and 3. The answer here would 
be 6.

*/
 /**********************************************
function smallestCommons(arr) {
  if (arr[1] <= arr[0])  arr.reverse() ;
  let sequence = rango(arr[0],arr[1]);
  //console.log(sequence);
  let mcm = 1;
  let result =[];
  sequence.forEach((item) => {
    result.push(factoresPrimos(item));
  })
  result = result.reduce((scm,currentValue) => {
    if (!scm) {
    scm = Object.assign({},currentValue);
    console.log(scm);
  } else {
   
    for (let property in currentValue) {
       if (property in scm) {
        scm[property] = currentValue[property] > scm[property] ? currentValue[property] :scm[property];
      } else {
        scm[property] = currentValue[property];

      }
    } }
  
  return scm;
  },{})
  for (let property in result) {
    console.log(property," ",result[property]);
    mcm *=  (parseInt(property) ** result[property]);
  }
  return mcm;
}
function factoresPrimos(num) {
  let factores = primos(rango(1,num));
  let obj ={};
  let counter = 0;
  let numero = num;
  factores.forEach((item) => {
    while (Number.isInteger(numero / item))   {
      counter++;
      numero /= item;

    }
    if (counter !== 0) obj[item] = counter;
    counter = 0
  })
  
  
  return obj;

}

console.log( smallestCommons([23, 18]));

//smallestCommons([1, 5]) // 60.
//smallestCommons([5, 1]) // 60.
//console.log(factoresPrimos(49)) // 2520.
//smallestCommons([1, 13]) // 360360.
//smallestCommons([23, 18]) // 6056820.
*************************************************/
/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/
/*
function fibonacciGenerator (num) {
  let arr =[0,1] ;
  let numAnterior = 0 , numSiguiente = 1, sum = 0 ;
  while (numSiguiente < num) {
   sum = numAnterior + numSiguiente;
   numAnterior = numSiguiente;
   arr.push(sum);
   numSiguiente = sum;
  }
  return arr; }

 function sumFibs(num) {
  let result = fibonacciGenerator(num).reduce((suma,currentValue) => {
     if (currentValue <= num && currentValue % 2 === 1) {
       suma +=currentValue;
     }
     return suma;
  },0)
  

  return result;
}
console.log(fibonacciGenerator(10)); 

//sumFibs(1) // a number.
//sumFibs(1000) // 1785.
//sumFibs(4000000) // 4613732.
console.log(sumFibs(1) )    */
//sumFibs(75024) // 60696.
//sumFibs(75025) // 135721. 

/*DNA 
You will get a DNA strand sequence and you need to get the pair and return it 
as a 2D array of the base pairs. Keep in mind that the provided strand should be 
first always.
Hint There are two base case, A-T and C-G, these go both way. You can use regular 
expression, if statements of anything that you can think of.
Hint 
function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
} */
/*
function separaCar(str) {
  let arr = [];
  for (let i = 0; i < str.length ; i++ ){
    arr.push(str[i]);
  }
  return arr ;
}
console.log(separaCar("ATAVC"));

function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  let paired = separaCar(str);
 // Loops through the input and pair.
  let result = paired.reduce((double, item) => {
    switch (item) {
      case "A":
      double.push([item,"T"]);

        break;
      case "T":
      double.push([item,"A"]);

        break;
      case "C":
      double.push([item,"G"]);

        break;
      case "G":
      double.push([item,"C"]);

        break;
      default:
        break;
    }
    return double;
  } ,[])

return result;
} 
*/
/*
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2]
*/
//console.log(pairElement("ATAVC"));
  /***************
function dropElements(arr, func) {
  // Drop them elements.
 let bool = true ;
  let result = arr.reduce((arresult,currentValue,item) => {
    if(func(currentValue) && bool) {
      arresult.push(currentValue);
      bool = false;
    } else if (!bool){
      arresult.push(currentValue);
    }
    return arresult;
  },[]);

  return result;  
}  


console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));
 *****************/
 /*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. 
convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Schindler's List") should return Schindler&​apos;s List.
convertHTML("<>") should return &​lt;&​gt;.
convertHTML("abc") should return abc.
*/
/*
function convertHTML(str) {
  
  let strOut = str.split('');
  console.log(strOut);
  
  for (var i = 0; i < strOut.length; i++) {
    switch (strOut[i]) {
      case '<':
        strOut[i] = '&lt;';
        break;
      case '&':
        strOut[i] = '&amp;';
        break;
      case '>':
        strOut[i] = '&gt;';
        break;
      case '"':
        strOut[i] = '&quot;';
        break;
      case "'":
        strOut[i] = "&apos;";
        break;
    }
  }

  strOut = strOut.join('');
  return strOut;
}

console.log(convertHTML("Sixty > twelve")); */
/***************************** 
Write a function that takes two or more arrays and returns a new array of unique 
values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their 
original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array 
should not be sorted in numerical order.
Check the assertion tests for examples.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]
*****/
/*
function uniteUnique(...args) {
  let arr = args.reduce((outarr,currentValue) => {
    currentValue.forEach((item) => {
      if (outarr.indexOf(item)==-1) {
        outarr.push(item);

      }
    });
    return outarr;
  },[]);
  return arr;
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1]));  */
/***************
 Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code. 
fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("stvwx") should return "u".
fearNotLetter("bcdf") should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

 ****/
/*
function fearNotLetter(str) {
  let missing ='';
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) - str.charCodeAt(i -1) > 1) {
      missing = String.fromCharCode(str.charCodeAt(i - 1) + 1);
      return missing;
    }
  }
  
  return ;
}

console.log(fearNotLetter("abce")); */
/*
STEAMROLLER
Flatten a nested array. You must account for varying levels of nesting.
Remember to use Read-Search-Ask if you get stuck. Try to pair program.

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4]
*/
 /**************
function steamrollArray(arr) {
  let flat = arr.toString().split(',');
  let flaten = flat.map(item => {
    if (item == "") {
      return;
    }else {
      return item;
    }
  }); 
  return flaten;
} */
/*****
function steamrollArray(arr) {
  let flaten = arr.toString().split(',').filter(item => item !== '').map(item => {
    if (item == '[object Object]') {
      return {};
    }else if (isNaN(item)) {
      return item;

    }else {
      return parseInt(item);
    }
  });
  return flaten;
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
***/
/*
BINARY AGENTS
Return an English translated sentence of the passed binary string.
The binary string will be space separated.
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"
12345
*/
/*********
function binaryAgent(str) {
  let arr = str.split(' ') ;

    return arr.map(item =>String.fromCharCode( parseInt(item,2) )).join('');
} 
    
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));
***/
/*
EVERYTHING BE TRUTH
Check if the predicate (second argument) is truthy on all elements of a collection 
(first argument).
In other words, you are given an array collection of objects. The predicate pre will 
be an object property and you need to return true if its value is truthy. Otherwise, 
return false.
In JavaScript, truthy values are values that translate to true when evaluated in a 
Boolean context.
Remember, you can access object properties through either dot notation or [] notation.
*/
/************
 function truthCheck(collection, pre) {
  let out = collection.every(element =>(element.hasOwnProperty(pre) && Boolean(element[pre])));
    
  
  return out; 
  
    
}

console.log(truthCheck([{"user": "Tinky-Winky", "sexo": 0}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
 
  *******/
/*
ARGUMENTS OPTIONAL
Create a function that sums two arguments together. If only one argument is provided, 
then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a 
function.
Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/
/*
 function addTogether(r,s) {
   //if (!s) {console.log(s)}
   if (s) {
    return r + s;
   }
   return number => number + r;
  
} 
*/
/********
function addTogether(r,s) {
  var args = Array.from(arguments);
       if (args.some(n => typeof n !== 'number' || typeof n == 'object') ) { 
      return undefined } ; 
  if (args.length > 1) {
   return args[0] + args[1];
  } else {
   return number =>typeof number === 'number' ? number + args[0] :  undefined ; 
 }
 } ;

//addTogether(2)([3]); //should return undefined.


console.log(addTogether(2,3));
var sumTwoAnd = addTogether(2);
console.log(sumTwoAnd);
console.log(sumTwoAnd(3)); 
***/
/*
MAKE A PERSON
Fill in the object constructor with the following methods below:
getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) 
setFullName(firstAndLast)
Run the tests to see the expected output for each method.
The methods that take an argument must accept only one argument and it has to be a string.
These methods must be the only available means of interacting with the object.
*/
  // **********
 /*var Person = function(firstAndLast) {
   this.first = firstAndLast.slice(0,firstAndLast.indexOf(' '));
   this.last = firstAndLast.slice(firstAndLast.indexOf(' ')+1);
   this.firstAndLast = firstAndLast;
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return this.firstAndLast;
  };
  this.getFirstName = function() {
    return this.first;
  };
  this.getLastName = function() {
    return this.last;
  };
  this.length = 6;
  this.setFullName = function(firstAndLast) {
   this.first = firstAndLast.slice(0,firstAndLast.indexOf(' '));
   this.last = firstAndLast.slice(firstAndLast.indexOf(' ')+1);
   this.firstAndLast = firstAndLast;
    return this.firstAndLast;
  };
  this.setFirstName = function(first) {
    this.first = first;
    this.firstAndLast = this.first + ' ' + this.last;
    return this.first;
  };
  this.setLastName = function(last) {
    this.last = last;
    this.firstAndLast = this.first + ' ' + this.last;
    return this.last;
  };
  
};
*/
//var bob = new Person('Bob Ross');
//bob.getFullName()
/*
Map the Debris
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
You can read about orbital periods on Wikipedia.
The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
 should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]. */

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let period = element => Math.round(Math.PI*2*Math.sqrt(Math.pow(earthRadius + element,3) / GM));
  let newarr = arr.map(objeto => {
    objeto["orbitalPeriod"] = period(objeto.avgAlt);
    delete(objeto.avgAlt);
    return objeto;
  });
  return newarr;
}
