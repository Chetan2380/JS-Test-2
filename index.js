//Q1.
// array=[1,2,3,4,5];
// array1=[];
// function square(array){
//     for(var i=0;i<array.length;i++){
//         // console.log(array[i])
//         var squre1=array[i]*array[i];
//         array1.push(squre1);
//     }
//     return array1
// }

// const array2=square(array);
// console.log(array2);

// Q2.

// function palindrome(name){
//     var str=""
//     for(var i=name.length-1;i>=0;i--){
//         // console.log(name[i])
//         str+=name[i];
//     }
//     if(name===str){
//         console.log("True")
//     }
//     else{
//         console.log("False")
//     }
// }
// palindrome("madam")

// Q3.
// array1=[1,2,3,4];
// array2=[3,4,5,6];

// array3=[]

// function common(array1,array2){
//     for(var i=0;i<array1.length;i++){
//         for(var j=0;j<array2.length;j++){
//             // console.log(array1[i],array2[j])
//             if(array1[i]===array2[j]){
//                 array3.push(array1[i],array2[j])
//             }
//         }
//     }
//     return array3
// }

// const array4=common(array1,array2);
// console.log(array4)

// Q8.

// function countwords(sentence){
//     var count=0;
//     for(var i=0;i<sentence.length;i++){
//         count=i
//     }
//     console.log(count)
// }

// countwords("This is a sample sentence")

// Q5.

// var number2=[];
// function todigit(number){
//     var number1;
//     number1=number.toString();
//     number3=number1.split('')
//     number2.push(number3)
//     return number2;
// }
// const numarray=todigit(12345);
// console.log(numarray)


// Q6.

// function duplicateletter(str){
//     for(var i=0;i<str.length;i++){
//         var str2='';
//         str2 += str[i]+str[i];
//         console.log(str2);
//     }
// }

// duplicateletter("hello")



