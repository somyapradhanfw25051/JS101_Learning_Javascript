//Problem 4: Print the average of even numbers from 1 to 100 (both included)

let N = 1;
sum = 0;
count=0;
while(N<=100){
  if(N%2==0){
  sum = sum+N;
  count++;
  }
  N++;
}
console.log("avg is",sum/count);
