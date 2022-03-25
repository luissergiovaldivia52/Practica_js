let arreglo = [{
    nombre: "Maggie",
    tipo: "Perro",
    edad: 3,
},
{
    nombre: "Guayaba",
    tipo: "Perro",
    edad: 1,
},
{
    nombre: "Snowball",
    tipo: "Gato",
    edad: 1,
},
];
//let arreglo = [1, 2, 50, 1, 2, 3, 88, 45];
let	busqueda = "Guayaba";
console.log("Tenemos el arreglo: ", arreglo);
console.log("Buscamos en donde el objeto sea igual a: ", busqueda);
let indice = arreglo.findIndex(mascota => mascota.nombre === busqueda);
console.log("El elemento buscado esta en el indice ", indice);
