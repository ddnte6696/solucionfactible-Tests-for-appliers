function persistence(num) {
  if (num.toString().length === 1) {
    return 0;
  }
  //se define una variable multiplicador
  var mult = 1;
  //se define una variable donde se almacenta el numero separado por digitos
  var splitStr = num.toString().split("");
  //se comienza un ciclo for que multiplica cada numero
  for (var i = 0; i < splitStr.length; i++) {
    mult *= parseFloat(splitStr[i])
  }
  //se regresa el resultado
  return 1 + persistence(parseFloat(mult));
}