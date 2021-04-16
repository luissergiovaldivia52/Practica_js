// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
//Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is positive.

// Examples:

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect


function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
    
    var resultado = Math.sqrt(sq);

    if (resultado === Math.floor(resultado)) {
        return (Math.pow(resultado ),2 );
                
            }
    return -1;
    
}


//"findNextSquare"
//"should return the next square for perfect squares", function() {
    findNextSquare(121);            // 144, "Wrong output for 121");
    findNextSquare(625);            // 676, "Wrong output for 625");
    findNextSquare(319225);         // 320356, "Wrong output for 319225");
    findNextSquare(15241383936);        // 15241630849, "Wrong output for 15241383936");
   
  //"should return -1 for numbers which aren't perfect squares"
findNextSquare(155);            // -1, "Wrong output for 155");
findNextSquare(342786627);      // -1, "Wrong output for 342786627");
  


// function findNextSquare(sq) {
//   return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
// }