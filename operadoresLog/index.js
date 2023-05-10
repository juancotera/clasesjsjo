// OR : te devolverá el primer valor verdadero
//ejemplo 1
// if (1 || 0) { // Funciona como if( true || false )
//   alert("valor verdadero!");
// } else {
//   alert ('falso')
// }

//ejemplo 2
// let hour = 9;
// if (hour < 10 || hour > 18) { //podemos incluir mas condiciones
//   alert( 'La oficina esta cerrada.' );
// }

//ejemplo 3
// let firstName = "";
// let lastName = "";
// let nickName = "SuperCoder";

// alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

//AND &&
// alert(true && true); // true
// alert(false && true); // false
// alert(true && false); // false
// alert(false && false); // false


//ejemplo AND: te devolverá el primer valor falso
// let hour = 12;
// let minute = 30;

// if (hour == 12 && minute == 30) {
//   alert("La hora es 12:30");
// }

//ejercicio 1 OR

//alert( alert(1) || 2 || alert(3) ); //los alert no son considerados como datos


let ege = 12;

if (!(ege > 13) || !(ege < 91)){
  alert("Edad permitida");
} else {
  alert("Edad no permitida");
}