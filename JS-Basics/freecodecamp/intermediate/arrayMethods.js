
const companies =
[{ name: "Company One ", category: "Finance", start: 1980 , end: 2010 },
{name: "Company Two ", category: "Construction", start: 1988 , end: 2005 },
{name: "Company Three ", category: "Food", start: 1993 , end: 2012 },
{name: "Company Four ", category: "Retail", start: 1995 , end: 2012 },
{name: "Company Five ", category: "Finance", start: 1985 , end: 2009 },
{name: "Company Six ", category: "Technology", start: 1980 , end: 2010 },
{name: "Company Seven ", category: "Software", start: 1981 , end: 2005 },
{name: "Company Eight ", category: "Construction", start: 1981 , end: 2010 },
{name: "Company Nine ", category: "Food", start: 1993 , end: 2009 },
{name: "Company Ten ", category: "Finance", start: 1988 , end: 2010 }];

const ages = [30, 21, 25, 56, 34, 78, 56, 34 , 23, 21, 19, 18, 64, 32];

//forEach
/*companies.forEach(function(company) {
    console.log(company);
})
// forEach with arrow function
companies.forEach((obj) => console.log(obj));*/

/* // Filter. Edades: Mayoría de edad . La funci+on debe devolver true para ejecutar el filtro
let mayoriaEdad= ages.filter(function(age){
   return age>=21;
}) 
console.log(mayoriaEdad);
// Filter with arrow functions
mayoriaEdad= ages.filter((age) => age >= 21);
console.log(mayoriaEdad); */

/* // Filter Compañías de comida food 

let foodCompanies = companies.filter(function(company) {return company.category ==="Food"; })

foodCompanies = companies.filter((company)=>company.category==="Food");
console.log(foodCompanies);

// Filter las compañias que comenzaron en la decada de lo ochenta
let eightiesComp = companies.filter((company)=>company.start >= 1980 && company.start < 1990);
console.log(eightiesComp); */

// MAP. 
/* // Lista de los nombres de la compañía
let listaComp = companies.map(company => company.name );

// Puede usarse para presentaci+on de la lista
listaComp = companies.map(company => `${company.name} -->>[${company.start} - ${company.end}]`);
console.log(listaComp);
//Duplicamos la edad con ages
doubleAges = ages.map(age => age*2) ;
console.log(doubleAges); */

// Sort. La función debe devolver 1 ó -1. Recibe de parámetros dos campos consecutivos digamos a,b
// Aquí están ordenadas por fecha de inicio. Desde las más viejas a las más recientes
/* let sortedCompanies = companies.sort(function(a,b) {
    if (a.start >= b.start ) {
        return 1;
    }else {
        return -1;
    }
})
sortedCompanies = companies.sort((a,b) => a.start >=b.start ? 1 : -1); 
sortedCompanies = companies.sort((a,b) => a.start - b.start ); 
console.log(sortedCompanies);

//const masViejos = ages.sort( (a, b) => b - a);
//console.log(masViejos); */

// Reduce
 /* let sumaEdades = ages.reduce(function(suma,age) {
    return suma + age ;
},0);
sumaEdades = ages.reduce((suma,age) =>  suma + age ,0);
console.log(sumaEdades);
let promEdades = ages.reduce((suma,age,i,array) =>  (suma + age*(i+1)) / (array.length ) ,0);
console.log(promEdades); */

// Ejemplo de Reduce con Objeto

let bienes = [["Feba", "Nevera", "300.000", "2"],
//["Feba", "Cocina", "500.000", "1"],
//["Feba", "Cocina Campo", "100.000", "3"],
//["Feba", "Computador", "550.000", "4"],
//["Ive", "Nevera", "435.000", "3"],
["Ive", "Licuadora", "120.000", "5"],
//["Ive", "Plancha", "80.000", "2"],
//["Ive", "Ice Maker", "333.000", "2"],
//["Enrique", "Aspiradora", "710.000", "2"],
["Enrique", "ElectroC", "1.300.000", "2"] ];

let inventario = bienes.reduce((customer, linea)=>{
    console.log("EEEeepa ", linea);
    return customer},{});

inventario = bienes.reduce((dueños, linea) => {
    //console.log("EEEeepa ", linea);
    dueños[linea[0]] = dueños[linea[0]] || [];
    dueños[linea[0]].push({
        name : linea[1] ,
        item : linea[2] ,
        cantidad : linea[3]
    })


    return dueños
}, {});

console.log(JSON.stringify(inventario, null, 2));