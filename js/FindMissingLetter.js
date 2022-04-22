function findMissingLetter(array) {
  //declaramos una variable para almacenar la cadena y con la funcion join, unimos todas las letras del arreglo
  var string = array.join("");
  //es declara un ciclo for que va a recorrer la totalidad del string
  for (var i = 0; i < string.length; i++) {
    /*
      Este if se puede dividir en 3 partes por la funcion charCodeAt
      1.-En base en el codigo de la siguiente lera en el string
      2.- Obtenemos el codigo de la letra actual
      3.-restamos el cogido de la letra siguiente al de la actual y verificamos si es igual a 1
    */
    if (string.charCodeAt(i + 1) - string.charCodeAt(i) != 1) {
      //Si el valor obtenido es diferente de , entonces esxcribimos a letra que debe de ir en ese espacio
      return String.fromCharCode(string.charCodeAt(i) + 1);
    }
  }
}