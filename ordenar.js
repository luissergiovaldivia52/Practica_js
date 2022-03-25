function Sandskill(nom, edad, especialidad, comp) {
  this.nombre = nom;
  this.edad = edad;
  if (especialidad == 1 || especialidad == 2 || especialidad == 3) {
    if (especialidad == 1)
      this.especialidad = "sistemas";
    if (especialidad == 2)
      this.especialidad = "web";
    if (especialidad == 3)
      this.especialidad = "multiplataforma";
  } else {
    this.especialidad = null;
  }
  this.comp = comp;

  //GETTER
  this.getNom = function() {
    return this.nombre;
  }
  this.getEdad = function() {
    return this.edad;
  }
  this.getEspecialidad = function() {
    return this.especialidad;
  }
  this.getComp = function() {
    return this.comp;
  }
}

var s1 = new Sandskill("Pepe", "22", "1");
var s2 = new Sandskill("Juan", "22", "2", s1);

function mostrarArrayOrdenado() {
  sandskillArray.sort();
  for (i = 0; i < sandskillArray.length; i++) {
    alert(sandskillArray[i].getNom() + " * " + sandskillArray[i].getEdad() + " * " + sandskillArray[i].getEspecialidad() + " * ")
  }
}

arrayTres.sort((a,b) =>{

  const apellidoA = a.apellido.toLowerCase();
  const apellidoB = .apellido.toLowerCase();
  if (apellidoA < apellidoB){
          return -1;
  }
    if (apellidoA > apellidoB){
          return 1;
    }

    
      return 0;
  

})

  
