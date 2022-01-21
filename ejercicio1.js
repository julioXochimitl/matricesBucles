/*Ejercicio 1
Parte 1
Hay tres personas esperando el banco. Sus nombres, en orden, son Sofía, David y Juan. Cree una matriz que tenga estos tres nombres en orden.

Parte 2
Se agregan dos personas más al final de la fila: Sara y Augustin. La primera persona en la fila es llamada al cajero. ¿Cómo es la cola?

parte 3
Resulta que David estaba reservando un lugar para su amiga Renata. Ella aparece y va detrás de él en la fila. Aparece una persona más (Elena) y va hasta el final de la fila. ¿Cómo es la cola?*/

//PARTE 1
var nombres = ["Sofía", "David", "Juan"];
console.log(nombres);

//PARTE 2
nombres.push("Sara");
nombres.push("Agustin");
console.log(nombres);

nombres.shift();
console.log(nombres);

//PARTE 3
for(let i = nombres.length; i>=0; i--){
    if(i==0){
        nombres[1] = "Renata";
    }else{
        nombres[i] = nombres[i-1];
    }
}
console.log(nombres);

nombres.push("Elena");
console.log(nombres);
