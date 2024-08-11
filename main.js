// introduction of asynchronous function(setTimeout)

// function sumOfNum(n){
//     let ans = 0;
//     for(let i = 0; i < n; i++){
//         ans += i;
//     }
//     return ans;
// }

// function findSumTill100(){
//     console.log(sumOfNum(100));
// }

// setTimeout(findSumTill100, 1000);
// console.log("hello world");

// how to make the setTimeout a synchronous function

// function findSumTill100(){
//     console.log(sumOfNum(100));
// }

// Method is call *busy waiting*

// function syncSleep(){
//     let a = 1;
//     for(let i = 0; i < 1000000000; i++){
//         a++;
//     }
// }

// syncSleep();
// findSumTill100();
// console.log("hello world");

// setTimeout(findSumTill100, 1000);
// console.log("hello world");

// fs readFile
// const fs = require("fs"); // filesystem module

// fs.readFile("test.txt", "utf-8", function(err, data){
//     console.log(data); // it will execute asynchronously (third)
// })

// console.log("hi there"); // this will execute first
// let a = 0;
// // takes very longer time than the file read
// for(let i = 0; i < 1000000000; i++){
//     a++;
// }

// console.log("hello there"); // this will take time to execute (second)

// How can we create a asynchronous function of our own?
// Ugly way

// const fs = require("fs");

// my own asynchronous function
// function chinmaysReadFile(cb){
//     fs.readFile("test.txt", "utf-8", function(err, data){
//         cb(data);
//     })
// }

// callback function to call
// function onDone(data){
//     console.log(data)
// }

// chinmaysReadFile(onDone);
// Here it is just a wrapper on top of another async function, which is fine. Usually all async functions you will write will be on top of JS provided async functions like setTimeOut or fs.readFile

// Cleaner Way(promises)
// const fs = require("fs");

// function chinmaysReadFile(){
//     return new Promise(function(resolve){
//         fs.readFile("test.txt", "utf-8", function(err, data){
//             resolve(data);
//         });
//     })
// }
//callback function to call
// function onDone(data){
//     console.log(data);
// }
// chinmaysReadFile().then(onDone);


// Another simple example of Promises

// function chinmaysReadFile(){
//     let test = new Promise(function(resolve){
//         resolve("Hello There!!");
//     });
//     return test;
// }

// const value = chinmaysReadFile();
// value.then(function(data){
//     console.log(data);
// })

// Async await syntax : (Again, just syntactic sugar. Still uses callbacks/Promises under the hood)

function chinmayAsyncFunction(){
    let test = new Promise(function(resolve){
        // do some async logic
        setTimeout(function(){
            resolve("hi there");
        }, 3000);
    });
    return test;
}

async function main() {
    let value = await chinmayAsyncFunction();
    console.log("hello there")
    console.log(value);
}
main()