function array_diff(a, b) {
  /*
    el prototipo de funcion include determina si un elemento de B no existe en A
    el prototipo de funcion filter arroja el elemento de A que no existe en B
  */
  return a.filter(e => !b.includes(e));
}