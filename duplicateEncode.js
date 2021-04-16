// The goal of this exercise is to convert a string to a new string where each character 
// in the new string is "(" if that character appears only once in the original string, or ")" if 
// that character appears more than once in the original string. Ignore capitalization 
// when determining if a character is a duplicate.
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. 
// If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word) {
    // ...

    var cadenaNueva = "";
    var cadena = [];
    var nuevaWord = [];
    var swap = false;
    
    for (var i = 0; i <= word.length-1; i++) {
        nuevaWord.push(word[i]);
    }
    
    cadena = nuevaWord.slice();
   // nuevaWord = cadena;

    for (let i = 0; i < word.length ; i++) {
        nuevaWord.shift();

        if (i === word.length - 1) {
            cadena.pop();
            if (cadena.includes(word[i])) {
                cadenaNueva = cadenaNueva + ')';
            } else {
                cadenaNueva = cadenaNueva + '(';
            }
        }
        else {

            if (nuevaWord.includes(word[i])) {
                cadenaNueva = cadenaNueva + ')';

            } else {
                cadenaNueva = cadenaNueva + '(';
            }
        }

    }
    return console.log(cadenaNueva);
}

duplicateEncode("din");					//"(((";
duplicateEncode("recede");				//"()()()";
duplicateEncode("Success");				//")())())","should ignore case");
duplicateEncode("(( @");				//"))((";