/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function sumaTodosPrimos(array) {
  // La funcion llamada 'sumaTodosPrimos' recibe como argumento un array de enteros.
  // y debe devolver la suma total entre todos los numeros que sean primos.
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Nota: Los números 0 y 1 NO son considerados números primos
  // Ej:
  // sumaTodosPrimos([1, 5, 2, 9, 3, 4, 11]) devuelve 5 + 2 + 3 + 11 = 21
  // Nota: Podes usar la funcion 'esPrimo' resuelta en la homework JSII.

  // Tu código aca:
  var counter = 0;
  function esPrimo(valor){
    if (valor < 0){return false}
    if (valor === 1 || valor === 0 || valor === 4 ){return false;}
    for (let x = 2; x <= valor/2; x++){
      if (valor % x === 0) { return false; }
    }
    return true;
  }
  array.forEach(element => {
    if (esPrimo(element)){
      counter += element;
    }
  });

  return counter;
}

// No modifiques nada debajo de esta linea //

module.exports = sumaTodosPrimos