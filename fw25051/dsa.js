//code to calculate sum of 1 to n numbers
let sum= 0;
let n = 9;
let ps =0;
for(let cn=0; cn<=n; cn++){
  ps=sum;
 
  sum = cn+ps;
}
console.log(sum);


//printing an electric bill
let N = 67;
let totalBill = 0;
if((N>=0) && (N<=50)){
  totalBill = (80 + (N*3));
  console.log(totalBill);
  }
  else if((N>=51) && (N<=150)){
  totalBill = (80 + (50*3) + ((N-50)*5));
  console.log(totalBill);
  }
  else if(N>=151){
  totalBill = (80 + (50*3) + (100*5) + ((N-150)*10));
  console.log(totalBill);
  }
  else{
  console.log("error");
  }

//floor division
   let x = 32/N;
    //Math.floor(x);
    if ((x===0)||(x<1)){
  console.log("Too Low");
}
else if(x ==Infinity){
  console.log("-1");
}
else{
  console.log(Math.floor(x));
}

    
// check if there is a vowel or not in a string
let str = "somya";
  let count =0;
  for(let i =0; i<str.length; i++){
        if((str[i]== "a")||(str[i]== "e")||(str[i]== "i")||(str[i]== "o")||(str[i]=="u")){
            count++;
        }    
  }
  if (count>=1){
      console.log("true");
  }
  else{
    console.log("false");  
  }

//check palindrum of a given number
let num = 1221;
let a = "";
a = a+num;
let b = "";
for (let i = a.length-1; i>=0; i--){
    b = b + a[i];
}
if(a==b){
    console.log("Yes");
}
else{
    console.log("No");
}


    
