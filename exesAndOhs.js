// Check to see if a string has the same amount of 'x's and 'o's. 
//The method must return a boolean and be case insensitive.
//The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    //code here

    var array = Array.from(str);
    var contadorX = 0 , contadorO = 0;
    
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] === 'x' || array[i] === 'X') {
            contadorX = contadorX + 1;
            
        } else {
            if (array[i] === 'o' || array[i] === 'O') {
                contadorO = contadorO + 1;
                
            }
            

        }
        
    }if (contadorX === contadorO) {
    	return true;
    } else{

    			return false;
    }

    
}

//XO('apple')
XO('xo');                   //true
XO("xxOo");                 //true
XO("xxxm");                 //false
XO("Oo");                   //false
XO("ooom");                 //false

/****************************************************************************************************/
/******                                                                                  ************/
/******                   Solucion                                                       ************/
/******                                                                                  ************/
/****************************************************************************************************/

/*function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}*/