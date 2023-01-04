//Problem 1: If the number is divisible by 3, print a "multiple of 3".

let n =15;
if(n%3==0){
  console.log("multiple of 3");
}
else{
  console.log("it's not a multiple of 3");
}

//ternary operator
(n%3==0)?console.log("multiple of 3"):console.log("it's not a multiple of 3");