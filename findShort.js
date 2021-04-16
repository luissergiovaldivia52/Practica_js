// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s){

        var array = [];
        var auxArray = [];
        var auxElemento = 0;
        array = s;
        var separador = " " 
        array = array.split(separador);

        var swap = true;

       for (let i = 0; i < array.length; i++) {
            auxArray.push(array[i].length);
  
           }
           array = auxArray;

           while (swap) {
             swap = false;

             for (let i = 0; i < array.length; i++) {
               if (array[i] > array [ i+1]) {

                    auxElemento = array[i];
                    array[i] = array [i+1];
                    array[i+1] = auxElemento;
                    swap = true;
               }
               
             }
             
           }
        return console.log(array[0]);

}


findShort("bitcoin take over the world maybe who knows perhaps");                   // 3;
findShort("turns out random test cases are easier than writing out basic ones");   // 3