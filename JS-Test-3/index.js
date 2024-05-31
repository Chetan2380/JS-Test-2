// Q1.
// for(var i=1;i<=100;i++){
//     // console.log(i)
//     if(i%3===0 && i%5===0){
//         console.log("Fizzbuzz")
//     }

//     else if(i%3===0){
//         console.log("Fizz")
//     }

//     else if(i%5===0){
//         console.log("Buzz")
//     }

//     else{
//         console.log(i)
//     }
// }

// Q3.
// array1=[1,2,3,4]
// array2=[2,4,6,8]
// array3=[];
// function intersection(array1,array2){
//     for(var i=0;i<array1.length;i++){
//         for(var j=0;j<array1.length;j++){
//             if(array1[i]===array2[j]){
//                 array3.push(array1[i])
//             }
//         }
//     }
//     return array3;
// }
// const intersection1=intersection(array1,array2)
// console.log(intersection1)

// Q4.
// var divisor = 2;
// var number = 13195;
// while(number > 1){
//     if(number % divisor === 0){ 
//         number /= divisor;
//     } else {
//         divisor++;
//     }
// }
// console.log(divisor);

// Q5.
// array=[1,2,2,3,4,4,5]
// function remdup(){
//     return array.filter((element,index)=>array.indexOf(element)===index);
// }
// var array2=remdup(array)
// console.log(array2)


// Q6.
// function flatten(arr) {
//   return arr.flat(Infinity)
// }

// const arr = [1, [2, [3, [4, 5]]], 6];

// console.log(flatten(arr));


// Q7.

// var number=[1,2,3,4,5,6];
// var target=4;

// function binarysearch(array,target){
//     var left=0; 
//     var right=array.length-1; 
//     while(left<=right){ 
//         var midindex=Math.ceil((left+right)/2); 
//         console.log(midindex, "midindex",array[midindex]) 
//         if (array[midindex]===target){ 
//             return midindex;
//         }
//         else if(array[midindex]<target){ 
//             console.log(array[midindex],target,"element is lesser than target");
//             left=midindex+1;
//         }
//         else if(array[midindex]>target){
//             console.log(array[midindex],target,"element is greater than target");
//             left=midindex-1;
//         }
//     }
// }

// const result=binarysearch(number,target)
// console.log(result)

