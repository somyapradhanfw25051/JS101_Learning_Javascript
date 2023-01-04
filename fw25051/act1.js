let mobile_phone="redmi";
let price=10000;

let your_choice="redmi";
let your_price=11000;
if((mobile_phone==your_choice)&&(price==your_price)){
console.log("i will buy the phone");  
}else{
console.log("i will not buy the phone");

//ternary operator & logical operator
((mobile_phone==your_choice)&&(price<=your_price))?console.log("i will buy the phone"):console.log("i will not buy the phone");


//prime Number code
let num = 1;
let count = 0;
  for(let j = 2; j<=num; j++){
    if(num%j==0){
    count++;
    }
     
  }
console.log(count);
if (count>=2){
   console.log("No");
}
else if (num==1){
  console.log(" 1 is independant number");
}  
else{
  console.log("Yes");
}
      