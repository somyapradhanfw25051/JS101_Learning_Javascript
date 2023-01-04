//Problem 1 : Given a string count the number of words in that string
let str = "I am learning web devlopment in masai";
let spaceGap = 0;

for(let i =0; i <str.length; i++){
  if(str[i]== " "){
  spaceGap++;
}
}
console.log(spaceGap+1);
