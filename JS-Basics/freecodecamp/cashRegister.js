/*
Design a cash register drawer function checkCashRegister() that accepts purchase 
price as the first argument (price), payment as the second argument (cash), and 
cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.
The checkCashRegister() function should always return an object with a status key 
and a change key.
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than 
the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the 
key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and 
bills, sorted in highest to lowest order, as the value of the change key.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (DOLLAR)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
*/
var conoMonetario = [
  {denominacion: "PENNY",  valor: 0.01},
  {denominacion: "NICKEL", valor: 0.05},
  {denominacion: "DIME",   valor: 0.1},
  {denominacion: "QUARTER", valor: 0.25},
  {denominacion: "ONE", valor: 1},
  {denominacion: "FIVE", valor: 5},
  {denominacion: "TEN", valor: 10},
  {denominacion: "TWENTY", valor: 20},
  {denominacion: "ONE HUNDRED", valor: 100}
];

function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    let efectivoTotal = cid.reduce((suma, item) => suma += item[1] , 0).toFixed(2);
    let disponibilidad = [];
    let cambio;
    conoMonetario.forEach(objeto => {
    cid.forEach(money => {
      if( money.indexOf(objeto["denominacion"]) !== -1) {
        disponibilidad.push({denominacion: objeto["denominacion"],
         valor: objeto["valor"], monto: money[1], qty: Math.round(money[1]/objeto["valor"])})
      } 
    });
    });

    disponibilidad = disponibilidad.reverse();
    /*disponibilidad.splice(2);
    console.log(disponibilidad);*/
    if (change > efectivoTotal) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }else if(change == efectivoTotal) {
      return {status: "CLOSED", change: cid};
    } 
    
    cambio = disponibilidad.reduce((arr,currentObject,index) => {
      if( change >= currentObject.valor) {
        let llevo = 0.00;
        while (change >= currentObject.valor && currentObject.monto >= currentObject.valor) {
          llevo += currentObject.valor;
          currentObject.monto -= currentObject.valor;
          change -= currentObject.valor;
          change = Math.round(change * 100)/100;
          //console.log(llevo,change);
        }
        arr.push([currentObject.denominacion, llevo]);
       // console.log(arr);
        return arr;
      }else {
        return arr;
      }

    }, [] )

    return cambio.length > 0 && change == 0 ? {status: "OPEN", change: cambio} :
    {status: "INSUFFICIENT_FUNDS", change: []};
  
}
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]
  
/* console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
   ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], 
   ["ONE HUNDRED", 100]]));*/
   console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05],
    ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20],
    ["TWENTY", 60], ["ONE HUNDRED", 100]]));


//conoMonetario.forEach(objeto => console.log(objeto.denominacion, objeto.valor));