/*function palindrome(params) {
    let frase = params.toUpperCase().split('');
    let esarf = [];
    frase = frase.filter(elem => elem !=' ' && elem != '-' && elem!='_' &&
                          elem!=',' && elem!='.' && elem!="'" &&
                          elem!='(' && elem!=')'	);
	
    frase.forEach(element => esarf.push(element));
    frase.reverse();
    //console.log(esarf);
    console.log(frase);
    for (let i = 0 ; i < frase.length ; i++) {
        if (frase[i] !== esarf[i]) {
            
            return false;

        }
        


    }
    return true;     
    
} */
function palindrome(params) {
    let frase = params.toUpperCase().split('');
    frase = frase.filter(elem => elem !=' ' && elem != '-' && elem!='_' &&
                          elem!=',' && elem!='.' && elem!="'" &&
                          elem!='(' && elem!=')'	);

	 
    for (let i = 0 ; i < Math.floor(frase.length/2)  ; i++) {
        if (frase[i] !== frase[frase.length-i-1]) {
            
            return false;

        }
    } 
    return true;     
}
console.log(palindrome("eye"), true);
console.log(palindrome("_eye"),true);
console.log(palindrome("race car"),true);
console.log(palindrome("not a palindrome"),false);
console.log(palindrome("A man, a plan, a canal. Panama"),true);
console.log(palindrome("never odd or even"), true);
console.log(palindrome("nope") , false);
console.log(palindrome("almostomla"), false);
console.log(palindrome("My age is 0, 0 si ega ym."), true);
console.log(palindrome("1 eye for of 1 eye.") ,false);
console.log(palindrome("0_0 (: /-\ :) 0-0") ,true);
console.log(palindrome("five|\_/|four"),false);