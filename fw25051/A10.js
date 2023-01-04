//Problem 2 : Given any character, if it is a vowel print "Vowel"

let char = "i";
if((char == "a")||(char == "e")||(char == "i")||(char == "o")||(char == "u")){
  console.log(char,"Vowel");
}
else{
  console.log(char,"Not a Vowel");
}


//ternary operator
((char == "a")||(char == "e")||(char == "i")||(char == "o")||(char == "u"))?console.log(char,"Vowel"):console.log(char,"Not a Vowel");