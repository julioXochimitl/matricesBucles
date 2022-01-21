/*Ejercicio #3
Escriba bucles while para hacer lo siguiente:

– Imprimir repetidamente el valor de la variable xValue, disminuyéndolo en 0,5 cada vez,
siempre que xValue siga siendo positivo.*/

/*
var xValue = 5;

while(xValue>0){
    xValue -= 0.5;
    console.log(xValue);
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////

/*- Imprime todos los números impares entre 1 - 100.*/

/*
var count = 0;

while(count<100){

    if(count%2!=0){
        console.log(count);
    }

    count++
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////

/*- Escriba un método con un bucle while para imprimir del 1 al n entre corchetes.
Por ejemplo, si n = 6 imprime [1] [2] [3] [4] [5] [6]*/

/*
var count2 = 1;
var n = 9;

while(count2<n+1){
    console.log(`[${count2}]`);
    count2++;
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////

/*- Escriba un método con un bucle while que calcule la suma de los primeros n enteros positivos:
suma = 1 + 2 + 3 + … + n
Ejemplos:
n = 5 suma = 15
n = 19 suma = 190
*/

var count3 = 0;
var n2 = 5;
var sum = 0;

while(count3<=n2){

    sum = count3 + sum; //A la variable suma se le asigna el valor de count3 que va incrementando en 1 en 1 y a este se le suma el valor de suma que se va almacenando.

    count3++
}

console.log(sum);