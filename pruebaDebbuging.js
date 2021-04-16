var countArray = function (array) {

       var suma = 0;

       for (var i = 0; i < array.length; i++) {
              if (Array.isArray(array[i])) {

                suma += countArray(array[i]);
              }else{
                suma += array[i];
              }
       }
       return suma;

     }

  // var nuevoArray = [];
  
  // var suma = 0;

  // for (let i = 0; i < array.length; i++) {
  //     if (Array.isArray(array[i])) {
  //        for (let j = 0; j < array[i].length; j++) {
  //            if (Array.isArray(array[i][j])) {

  //                 for (let k = 0; k < array[i].length; k++) {
  //                           if (Array.isArray(array[i][j][k])) {

                                      
                              
  //                           } else {
                              
  //                             nuevoArray.push(array[i][j][k]);
  //                           }
  //          }
          
  //       } else {
          
  //          nuevoArray.push(array[i][j]);
  //       }
          
          
  //        }

  //   } else {
  //     nuevoArray.push(array[i]);
  //                 }
    
  // }
  
  //       for (let i = 0; i < nuevoArray.length; i++) {
  //         suma = suma + nuevoArray[i];
          
  //       }

  // return suma;


//}
          


console.log(countArray([1, [2, [3, 4]], [5, 6], 7]));//.to.equal(28);
console.log(countArray([[3, 5, [6], 7, [10, [9, 1]]]])); //to.equal(41);
console.log(countArray([])); //.to.equal(0);
 