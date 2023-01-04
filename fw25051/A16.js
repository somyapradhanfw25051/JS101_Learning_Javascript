//Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit

let N= 1;
let sum = 0;
while(N<=20){
  if(N%3==0){
  sum=sum+N;
  }
  N++;
}
console.log(sum);