const items = [4,8,5,9];
const mult = items.reduce(function (a,b,c,d) {return a+b+c+d;}); //=>26
console.log(mult);