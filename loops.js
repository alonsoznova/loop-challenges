console.log("Imprimir todos los números impares del 1 al 20");
for(let i=1; i<=20; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}
console.log("");
console.log("Imprimir todos los números divisibles por 3 entre el 100 y el 0");
for(let j=100; j>=0; j--){
    if(j % 3 === 0){
        console.log(j);
    }
}
console.log("");
console.log("Imprimir la secuencia: 4, 2.5, 1, -0.5, -2, -3.5");
var sec = "";
for(let k=4; k>-4; k-=1.5){
    if(k != -3.5){
        sec += k;
        sec += ", ";
    }else{
        sec += k;
    }
}
console.log(sec);
console.log("");
console.log("Imprimir la suma entre todos los números del 1 al 100");
let sum = 0;
for(let l=1; l<=100; l++){
    sum += l; 
}
console.log(sum);
console.log("");
console.log("Imprimir el producto entre todos los números del 1 al 12");
let product = 1;
for(let h=1; h<=12; h++){
    product = product * h; 
}
console.log(product)