let lines = str.split("\n");
let line = lines.shift().split(" ");
let X = line[0];
let Y = line[1];

let price = 0

for(let i=0; i < X.length; i++){
    if(X[i] == 1) {
        price += Y[i] * 4.00
    } else if(X[i] == 2) {
        price += Y[i] * 4.50
    } else if(X[i] == 3) {
        price += Y[i] * 5.00
    } else if(X[i] == 4) {
        price += Y[i] * 2.00
    } else if(X[i] == 5) {
        price += Y[i] * 1.50
    }
}
