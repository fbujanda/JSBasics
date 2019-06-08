function convertRot13(letter) {
  let asciiCode = letter.charCodeAt(0);
  let asciiLetter = asciiCode < 78 ? asciiCode + 13 : asciiCode - 13 ;
  return String.fromCharCode(asciiLetter);
 
 }
 
 function rot13(str) { // LBH QVQ VG!
 let strout = []  ;
 str.split('').forEach(item => {
   if (/[^a-zA-Z]/.test(item)) {
    strout.push(item);
   }else {
    strout.push(convertRot13(item));
   }
 });
   return strout.join("");
 }

 console.log(rot13("SERR PBQR PNZC"));