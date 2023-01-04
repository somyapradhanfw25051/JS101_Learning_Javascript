//Problem 3: Print a box patterns using *
for(let h=1; h<=10;h++){
  let str= "";
  for(let v=1; v<=10;v++){
    if(h==1 ||h==10){
      str= str+"*";
    }
    else if(v==1 || v==10){
      str= str+ "*";
    }
    else{
      str= str+ " ";
    }
  }
  console.log(str);
}