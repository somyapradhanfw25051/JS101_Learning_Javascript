//printing total  odd and even numbers in an array
let arr=[1,2,3,4,5];
let count1=0;
let count2=0;
for(let i = 0; i<arr.length; i++){
  if(arr[i]%2==0){
    count1++; 
  }
  else{
    count2++;
  }
}
console.log(count1, count2);

//program to find the smallest element in an array
let arr = [1,2,3,4,5];
let min = arr[0];
for(let i = 0; i <arr.length; i++){
  if(min> arr[i]){
    min = arr[i];
  }
}
console.log(min);

//program to find the largest element in an array
let max = arr[0];
for(let i = 0; i <arr.length; i++){
  if(max< arr[i]){
    max= arr[i];
  }
}
console.log(max);


//program to check palindrum by string
let str = "moy";
let b = "";
 for(let i=str.length-1; i>=0; i--){
        b = b + str[i];
    }
   console.log(b);
  if(str===b){
    console.log("Yes");
   } 
else{
    console.log("No");
 }
 