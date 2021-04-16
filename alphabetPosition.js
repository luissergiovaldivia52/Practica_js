// Welcome.
// In this kata you are required to, given a string, replace every letter with its 
//position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string


function alphabetPosition(text) {

  var array = [];
  var separador = " ";
  array = text;

    array = Array.from(text);
   // array = array.split(separador);
    //array = array.split(separador);
      
    

    for (let i = 0; i < array.length; i++) {
      if (array[i] === "a" || array[i] === "A") {
            array[i] = 1;
         }

      if (array[i] === "b" || array[i] === "B") {
            array[i] = 2;
         }

      if (array[i] === "c" || array[i] === "C") {
            array[i] = 3;
         }

      if (array[i] === "d" || array[i] === "D")  {
            array[i] = 4;
         }
      
      if (array[i] === "e" || array[i] === "E") {
            array[i] = 5;
         }

      if (array[i] === "f" || array[i] === "F") {
            array[i] = 6;
         }

    if (array[i] === "g" || array[i] === "G") {
            array[i] = 7;
         }
    
    if (array[i] === "h" || array[i] === "H") {
            array[i] = 8;
         }

    if (array[i] === "i" || array[i] === "I")  {
            array[i] = 9;
         }

      if (array[i] === "j" || array[i] === "J") {
            array[i] = 10;
         }

    if (array[i] === "k" || array[i] === "K") {
            array[i] = 11;
         }

    if (array[i] === "l" || array[i] === "L") {
            array[i] = 12;
         }
    
    if (array[i] === "m" || array[i] === "M") {
            array[i] = 13;
         }

    if (array[i] === "n" || array[i] === "N") {
            array[i] = 14;
         }
    
    if (array[i] === "o" || array[i] === "O")  {
            array[i] = 15;
         }
    
    if (array[i] === "p" || array[i] === "P") {
            array[i] = 16;
         }

    if (array[i] === "q" || array[i] === "Q") {
            array[i] = 17;
         }

    if (array[i] === "r" || array[i] === "R") {
            array[i] = 18;
         }
    
    if (array[i] === "s" || array[i] === "S") {
            array[i] = 19;
         }
    
    if (array[i] === "t" || array[i] === "T") {
            array[i] = 20;
            //array[i] = text.charAt(0);
         }
      
    if (array[i] === "u" || array[i] === "U") {
            array[i] = 21;
         }

    if (array[i] === "v" || array[i] === "V") {
            array[i] = 22;
         }
    
    if (array[i] === "w" || array[i] === "W") {
            array[i] = 23;
         }
    
    if (array[i] === "x" || array[i] === "X") {
            array[i] = 24;
         }
      
    if (array[i] === "y" || array[i] === "Y") {
            array[i] = 25;
         }

    if (array[i] === "z" || array[i] === "Z") {
            array[i] = 26;
         }
    
          
    }

  //array = array.toString();
  var arrString = array.join(" ");
 // return console.log(array); //console.log(text);
 return console.log(arrString);
}


//alphabetPosition("ab b c");
alphabetPosition("The sunset sets at twelve o' clock."); //"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
alphabetPosition("The narwhal bacons at midnight.");    //"20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");

