//Problem 2 :Given a string print, the number of times each character appears
let s= "somya pradhan";
let unique = {};

for(let i=0;i<s.length;i++){

  if(unique[s[i]] == undefined){
    unique[s[i]]=1;
  }
  else{
    unique[s[i]]++;
  }
}

console.log(unique);