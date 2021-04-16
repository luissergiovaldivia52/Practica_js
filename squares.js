// A square of squares
// You like building blocks. You especially like building blocks that are squares. 
// And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. 
// Instead, you end up with an ordinary rectangle! Those blasted things! 
// If you just had a way to know, whether you're currently working in vain… Wait! That's it! 
// You just have to check if your number of building blocks is a perfect square.

var isSquare = function(n){

    if (n < 0) {
        return false, console.log(`"${n}: Negative numbers cannot be square numbers"`);
      }

      var numero = Math.sqrt(n);

      
      if ( numero === 0) {

        return true, console.log(`"${n} is a square number (0 * 0)"`);
      }

  if (numero - Math.floor(numero) == 0) {

        return true, console.log(`"${n} is not a square number (${numero} * ${numero})"`); // ("Es un numero entero");
    } 
    
  return false, console.log(`"${n} is not a square number"`); // fix me
}


 isSquare(-1), false, "-1: Negative numbers cannot be square numbers";
 isSquare( 0), true, "0 is a square number (0 * 0)";
 isSquare( 3), false, "3 is not a square number";
 isSquare( 4), true, "4 is a square number (2 * 2)";
 isSquare(25), true, "25 is a square number (5 * 5)";
 isSquare(26), false, "26 is not a square number";
 
