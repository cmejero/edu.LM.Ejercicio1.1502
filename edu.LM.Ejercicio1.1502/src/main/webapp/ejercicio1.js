/**
 * 
 */

 
document.write("Caso 1: ");
var a = 5;
var b = 10;

if (a === 5) {
  let a = 4;
  var b = 1;

  

document.write(a);
  

document.write(b);

}

document.write(a);
document.write(b);

/* el primer valor es 4 porque es de tipologia local y dentro de ese if valdrá 4 */
/* el segundo valor es 1 porque cambia el valor en el if a valor 1 */
/* el tercer valor es 5 porque el valor general de "a" es 5 y solo ha sido modificado de forma local en el if.
/* el cuarto valor es 1 ya que el valor ha sido modificado con un var en el if y este modifica el valor de forma general*/


document.write("<br>");
document.write("Caso 2: ");


for (let i = 0; i<10; i++) {
  

document.write(i);
}
/* el valor es 0123456789 ya que se va incrementando el numero en cada vuelta del bucle for, este valor solo se guardara a nivel local ya que "i" */
/* es de tipologia let*/

/*document.write(i); */
/* i es nulo al estar fuera del let y ser de tipología local.*/

document.write("<br>");



document.write("Caso 3: ");
    var z = 5
    let x = z+10, y = 12;
   
    document.write(x + y);
    
    /* el resultado es 27 porque a x tiene un valor que suma el valor de "z" que es 5 a 10 = 15 y esto se le suma el valor de "y"" que es 12*/
    /* 15 + 12 = 27 */