function  factorial(number) {

     return number <=1 ? 1: number* factorial(number-1);
}

console.log(factorial(5));

const x =10;
(function () {
    console.log(x);
})();