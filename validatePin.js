// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits
//or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
// Examples
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
  //return true or false
    var pin = pin;
    var pinNumber = Number(pin);

    if (!typeof pinNumber === 'number') {
        return console.log(false);
    } else {
        if (!Number.isInteger(pinNumber)) {
            return console.log(false);
        } else {
            
            if (pin.length === 4 || pin.length === 6) {
                return console.log(true);
                
            }
        }
    }
    return console.log(false);
}



//"should return False for pins with length other than 4 or 6", 
validatePIN("1");                  //,false, "Wrong output for '1'")
validatePIN("12");                 //false, "Wrong output for '12'")
validatePIN("123");                //false, "Wrong output for '123'")
validatePIN("12345");              //false, "Wrong output for '12345'")
validatePIN("1234567");            //false, "Wrong output for '1234567'")
validatePIN("-1234");              //false, "Wrong output for '-1234'")
validatePIN("1.234");              //false, "Wrong output for '1.234'")
validatePIN("-1.234");              //false, "Wrong output for '-1.234'")
validatePIN("00000000");               //false, "Wrong output for '00000000'")
  
  
  //"should return False for pins which contain characters other than digits"
validatePIN("a234");                //,false, "Wrong output for 'a234'"
validatePIN(".234");                //false, "Wrong output for '.234'"

  
  //"should return True for valid pins"
validatePIN("1234");                    //true, "Wrong output for '1234'");
validatePIN("0000");                    //true, "Wrong output for '0000'");
validatePIN("1111");                    // true, "Wrong output for '1111'");
validatePIN("123456");                  //true, "Wrong output for '123456'");
validatePIN("098765");                  //true, "Wrong output for '098765'");
validatePIN("000000");                   //true, "Wrong output for '000000'");
validatePIN("123456");                      // true, "Wrong output for '123456'");
validatePIN("090909");                      //true, "Wrong output for '090909'");


// function validatePIN (pin) {
  
//   var pinlen = pin.length;
//   var isCorrectLength = (pinlen == 4 || pinlen == 6);
//   var hasOnlyNumbers = pin.match(/^\d+$/);
    
//   if(isCorrectLength && hasOnlyNumbers){
//     return true;
//   }
  
//   return false;

// }