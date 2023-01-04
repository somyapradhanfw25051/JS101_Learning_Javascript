//Problem 3 : Given and character if it is a consonant print "Consonant"
let char = "b";
if(!(char == "a") && !(char == "e") && !(char == "i") && !(char == "o") && !(char == "u")){
  console.log(char,"Is a Consonant");
}
else{
  console.log(char,"Is not a Consonant");
}


//ternary operator
(!(char == "a") && !(char == "e") && !(char == "i") && !(char == "o") && !(char == "u"))?console.log(char,"Is a Consonant"):console.log(char,"Is not a Consonant");