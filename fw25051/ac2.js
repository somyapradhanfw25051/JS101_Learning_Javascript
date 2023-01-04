//let g1 = "male";
let g ="female";
//let age = 21;
let age = 17;



(((g=="male")&&(age>=21))||((g=="female")&&(age>=18)))?console.log("you can marry"):console.log(g," can not marry");


//code to print the sum of first k multiples of n , in condition that they must divisible by y
let n = 3;
let k = 10;
let y = 5;
sum = 0;
for(let i = 1; i <=k; i++){
  {
    if((i*n)%y==0){
     sum = sum + i*n;
    }
  }
  
}
console.log(sum);