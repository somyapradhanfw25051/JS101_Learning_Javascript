//Problem 2 : Given an array of string count the overall total number of characters

let s = ["pokemon","dragonball","deathnote","naruto","onepiece"];
let sum = 0;

for(let i=0; i<s.length; i++){
  sum = sum + s[i].length;
}
console.log(sum);