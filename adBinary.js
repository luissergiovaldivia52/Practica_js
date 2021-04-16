// Implement a function that adds two numbers together and returns their sum in binary. 
//The conversion can be done before, or after the addition.
// The binary number returned should be a string.

 function addBinary(a, b) {
    


    return (a + b).toString(2);
    


}



// function addBinary(a, b) {
    
//     var cadenaResiduo = "";
//     var sum = a + b;
//     var residuo = 0;

//     while (sum > 0) {
//         residuo = sum % 2;

//         cadenaResiduo = cadenaResiduo + residuo;
//         sum = Math.floor( sum / 2);
        
//     }   

//     return console.log(cadenaResiduo);
    


// }


  var results1 = addBinary(1,2);  //"Should return something that isn't falsy",
                                // results1, "Something is wrong, no results!";
                                //"Should return \"11\"" 
                                    //results1, "11"
   