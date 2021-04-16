// EJERCICIO 7
// Implementar la funcion multiCallbacks:
// la funcion multiCallbacks recibe dos arrays de objetos cuyas propiedades son dos,
// 'cb' que es una funcion, y 'time' que es el tiempo estimado de ejecucion de dicha funcion 
// este ultimo representado con un integer como se muestra acontinuacion:
// let cbsExample = [
//     {cb:function(){}, time: 2},
//     {cb:function(){}, time: 3}
// ]
// De manera que lo que nuestra funcion 'multiCallbacks' debe de ir ejecutando las funciones 
// sin pasarle parametros pero debe ir alternando las funciones de cbs1 y cbs2 
// segun cual de estas se estima que tarde menos, retornando un arreglo de resultados
// de las mismas en el orden que fueron ejecutadas
// Ejemplo:
// > let cbs1 = [
//       {cb:function(){return '1-1'}, time: 2},
//       {cb:function(){return '1-2'}, time: 3}
//   ];
// > let cbs2 = [
//       {cb:function(){return '2-1'}, time: 1},
//       {cb:function(){return '2-2'}, time: 4}
//   ];
// > multiCallbacks(cbs1, cbs2);
// < ["2-1", "1-1", "1-2", "2-2"];

function Queue() {
    this._arr = [];
}

Queue.prototype.enqueue = function(val) {
    this._arr.push(val);
}

Queue.prototype.dequeue = function() {
    return this._arr.shift();
}

Queue.prototype.size = function() {
    return this._arr.length;
}

function multiCallbacks(cbs1, cbs2){

    var suma = [];
    var resultado = [];

    suma = cbs1.concat(cbs2);
    
    for (let i = 0; i < array.length; i++) {
        
        
    }




    return suma[0].cb();
}


 let cbs1 = [
      {cb:function(){return '1-1'}, time: 2},
       {cb:function(){return '1-2'}, time: 3}
   ];
 let cbs2 = [
       {cb:function(){return '2-1'}, time: 1},
       {cb:function(){return '2-2'}, time: 4}
   ];
console.log( multiCallbacks(cbs1, cbs2)); // ["2-1", "1-1", "1-2", "2-2"];




