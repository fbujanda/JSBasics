function beta(num) {

    let rango = ['', '', ''];
    if ( num >= 1 && num < 10) rango =['I','V','X'];
    if ( num >= 10 && num < 100) rango =['X','L','C'];
    if ( num >= 100 && num < 1000) rango =['C','D','M'];
    if ( num >= 1000 ) rango =['M','-','-'];

	
    return rango;
}

function decimalToRoman(num) {
 
    let arre = String(num).split('');
    let digit;
    let str ='';
    let i = 0;

    for ( let i = 0; i < arre.length; i++ ) {
        digit =  parseInt(arre[i]);
        let [a,b,g] = beta(num);
        switch (digit) {
            case 1:
                str += a;
                break;
            case 2:
                str += a + a;
                break;
            case 3:
                str += a + a + a;
                break;
            case 4:
                str += a + b;
                break;
            case 5:
                str += b;
                break;
            case 6:
                str += b + a ;
                break;
            case 7:
                str += b + a + a;
                break;
            case 8:
                str += b + a + a + a;
                break;
            case 9:
                str += a + g;
                break;


            default:
                break;
        }


       num -= digit*(Math.pow(10,arre.length-i-1));
 
}
return str;
}

// console.log(ordinalRoman(5));
// console.log(ordinalRoman(7));
// console.log(ordinalRoman(9));

 console.log(decimalToRoman(500), 500);
 console.log(decimalToRoman(501), 501);
 console.log(decimalToRoman(649), 649);
 console.log(decimalToRoman(798), 798);
 console.log(decimalToRoman(891), 891);
 console.log(decimalToRoman(1000), 1000);
 console.log(decimalToRoman(1004), 1004);
 console.log(decimalToRoman(1006), 1006);
 console.log(decimalToRoman(1023), 1023);
 console.log(decimalToRoman(2014), 2014);
 console.log(decimalToRoman(3999), 3999);
 





/*
switch (digit) {
        case 1:
        case 2:
        case 3:
            str += alpha * digit;
            break;
        case 4:
            str += alpha + beta;
            break;
        case 5:
        	str += beta;
            break;
        case 6:
        case 7:
        case 8:
            str += beta + alpha * digit ;
            break;
    	case 9:
        	str += beta + gamma ;
            break;    

    
        default:
            break;
    }
*/