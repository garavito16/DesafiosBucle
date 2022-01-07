console.log("imprimiendo numeros impares 1-20");

for (let index = 1; index <=20; index++) {
    if(index%2==1) {
        console.log(index);
    }
}

console.log("imprimiendo múltiplos de 3");

for (let index = 100; index >= 0; index--) {
    if(index%3==0) {
        console.log(index);
    }
}

console.log("imprimiendo una secuencia");

for (let index = 4; index >= -4; index-=1.5) {
    console.log(index);
}

console.log("imprimiendo resultado Sigma");
let sum = 0;
for (let index = 1; index <= 100; index++) {
    sum+=index;
}

console.log(sum);

console.log("Factorial de 12")
let product = 1;
for (let index = 1; index <= 12; index++) {
    product *= index;
}

console.log(product);