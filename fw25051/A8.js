//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let stored_username = "somya pradhan";
let stored_password = "fw25_051";

let username = "somya pradhan";
let password = "fw25_051";

if(stored_username==username){
  if(stored_password==password){
    console.log("Login successful!!");
  }
  else{
    console.log("Invalid password!!");
  }
}
else{
  console.log("Invalid username!!");
}
