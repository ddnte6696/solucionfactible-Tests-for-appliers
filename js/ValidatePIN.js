function validatePIN (pin) {
  return typeof pin === 'string' && // Verifica que el pin es una cadena
    Number.isInteger(+pin) && // mse asegura que la cadena es un entero cuando se transforma
    [4, 6].includes(pin.length) // permite solo una longitud de 4 o 6 
}