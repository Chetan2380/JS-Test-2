// Q1.
// for(var i=0;i<=20;i++){
//     if(i%2===0 && i!=10){
//         console.log(i)
//     }
// }

// Q2.
// var num=1;
// var number=4;
// var temp=1;
// count=0;

// while(temp<=number){
//     num=num*temp;
//     temp++;
//     count++;
// }

// console.log("Factorial:",num)
// console.log("NUmber of iterations:",count)

// Q3.Create a JavaScript function that takes an array of numbers as input and returns the sum of all the even numbers using a for loop.

// array=[1,2,3,4,5,6,7,8,9,10];
// var sum=0;
// function sumeven(array){
//     for(var i=0;i<array.length;i++){
//         if(array[i]%2===0){
//             sum=sum+array[i];
//         }
//     }
//     return sum;
// }

// const result=sumeven(array);
// console.log(result);

// Q4.
array=[];
function fibonacci(number){
    var a=0;
    var b=1;
    var newnum;
    newnum=a+b;
    array.push(a);
    array.push(b);
    array.push(newnum);

    while(newnum<=number){
        // console.log(newnum)
        a=b;
        b=newnum;
        newnum=a+b;
        array.push(newnum);
    }
    return array;
}
const result=fibonacci(10);
console.log(result);

// Q5.
// array=["rishabhp","virat","rohit","klrahul1"]
// var string=[];
// function lengthseven(array){
//     for(var i=0;i<array.length;i++){
//         // console.log(array[i])
//         if(array[i].length>7){
//             string.push(array[i]);
//         }
//     }
//     return string;
// }
// const result=lengthseven(array);
// console.log(result);

// Q7.
// var sum=0;
// for(var i=1;i<=1000;i++){
//     if(i%3==0 || i%5==0 || i%7==0){
//         sum=sum+i;
//     }
// }

// console.log(sum);

// Q8.
// var string="awdiz";
// function reversestr(string){
//     var str1="";
//     for(var i=string.length-1;i>=0;i--){
//         str1+=string[i]
//     }
//     console.log(str1)
// }
// reversestr(string)

//Q6.Write a JavaScript function that takes a number as input and returns true if it is a prime number, otherwise false. Additionally, the function should also print all the factors of the number.

// var primenum = true;
// function prime(number) {
//   if (number < 2) {
//     return false;
//   } else if (number >= 2) {
//     for (var i = 2; i < number; i++) {
//       if (number % i == 0) {
//         console.log("Factor:", i);
//         primenum = false;
//       }
//     }
//     if (primenum) {
//       console.log("True");
//     } else {
//       console.log("False");
//     }
//   }
// }
// console.log(prime(12));

// Q9.

// function randompassword(){
//     let password="";
//     let string="ABCDEFGHIJKLMNOPQRSTUVWXYZ"+"abcdefghijklmnopqrstuvwxyz"+'0123456789';

//     for(let i=0;i<=8;i++){
//         let char=Math.floor(Math.random()*string.length+1);

//         password+=string.charAt(char)
//     }
//     return password;
// }

// console.log(randompassword())

// Q10.
// array=[1,2,3,4,5,6,7,8,9,10]
// function maxdiff(array){
//     min=Infinity;
//     max=0;
//     for(var i=0;i<array.length;i++){
//         if(array[i]<min){
//             min=array[i]
//         }

//         else if(array[i]>max){
//             max=array[i]
//         }
//     }
//     return max-min;
// }

// const result=maxdiff(array);
// console.log(result);
