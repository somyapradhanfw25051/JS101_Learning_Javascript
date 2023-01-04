//OBJECT
let myDetails ={
  name: "Somya Pradhan",
  age: 23,
  city: "Sambalpur",
  fatherName: "Sankirtan Pradhan",
  motherName: "Nibedita Pradahn",
  contact: 765843
};
console.log(myDetails); // will print everything
// 1 way dot notation : if you want to print a specific data 
console.log(myDetails.name);
// 2 way bracket notation : if you want to print a specific data 
console.log(myDetails["age"]);

//adding new elements into string
myDetails.hobbie = "cooking";
console.log(myDetails);
myDetails["bestfriend"] = "manisha";
console.log(myDetails);

//chaning/replacing/updating
myDetails.contact= "678977";
console.log(myDetails);

//delet the entier data
delete myDetails["city"];
delete myDetails.hobbies;
console.log(myDetails);

//adding array and object inside an object and printing it
let data ={
  name: "Somya Pradhan",
  age: 23,
  city: "Sambalpur",
  hobbies : ["anime","cooking","currnecy collecting"],
  location :{
    city: "sambalpur",
    state:"odisha",
    pincode: 768002,
    
  },
};

console.log(data.hobbies);
console.log(data.hobbies[0]);

console.log(data.location);
console.log(data.location.state);
console.log(data.location["pincode"]);