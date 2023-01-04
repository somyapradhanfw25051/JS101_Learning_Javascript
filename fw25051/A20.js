//Problem 3 : Given an array of numbers find the average of all the even numbers.

let a =[1,2,3,4,5,6,7,8,9,10,11,12,10,10,8];
let sum =0;
let count = 0;

for(let i = 0; i<a.length; i++){
  if(a[i]%2==0){
    sum = sum+ a[i];
    count++;
  }
}
avg= sum/count;
console.log(avg);