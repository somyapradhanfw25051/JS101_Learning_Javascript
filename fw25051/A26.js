//Problem 1 :Given an array find the unique items in the array
let arr = ["somya", "manisha","ayush", "anek", true, 8,"anek",28,false, "somya",28,true,8];
let unique= {};

for(let i=0;i<arr.length;i++){
  unique[arr[i]]= 1;
}

console.log(unique);