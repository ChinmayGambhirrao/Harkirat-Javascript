// Loops
let ans = 0;

for(let i = 0; i <= 50; i++){
    ans = ans + i;
}
// console.log(ans);

// Functions
function findSum(n){
    let ans = 0;

    for(let i = 0; i <= n; i++){
        ans = ans + i;
    }
    return ans;
}

console.log(findSum(50));   

// Callback Functions -> Calling one function inside another function

function squareOfNum(n){
    return n * n;
}

function sumOfSquare(a, b){
    const value1 = squareOfNum(a);
    const value2 = squareOfNum(b);

    return value1 + value2;
}

console.log(sumOfSquare(3, 5));

// Callback functions
function square(a){
    return a * a;
}

function cube(a){
    return a * a * a;
}

function sumOfSomething(a, b, callback){
    const val1 = callback(a);
    const val2 = callback(b);
    return val1 + val2;
}

console.log(sumOfSomething(2, 2, cube));

// Anonymous function
function sumOfSomething(a, b, callback){
    const val1 = callback(a);
    const val2 = callback(b);
    return val1 + val2;
}
const ans1 = sumOfSomething(2, 2, function(n){
    return n * n * n;
})
console.log(ans1);
