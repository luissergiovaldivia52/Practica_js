// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, 
//containing distinct letters,

// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  // your code
  
    var str = s1 + s2;
    var expresion = /[a-z]/gi;

    str = str.match(expresion);


    return console.log(str);
              
}


//"longest",
//"Basic tests"
longest("aretheyhere", "yestheyarehere");                                   // "aehrsty"
longest("loopingisfunbutdangerous", "lessdangerousthancoding");             // "abcdefghilnoprstu"
longest("inmanylanguages", "theresapairoffunctions");                       // "acefghilmnoprstuy"
