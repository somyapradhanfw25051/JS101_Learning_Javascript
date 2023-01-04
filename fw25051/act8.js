let data = {
  name: "Somya",
  age : 23,
  driving_licence :true,
  lunch : false,
  location : "sambalpur"
};
console.log(data);

data.fathernam = "sankirtan pradhan";
data["bestfriend"] = "manisha";
data["sister"] = "bui";
console.log(data);

data.age = "24";
data["driving_licence"]= false;
data["lunch"]= true;
console.log(data);

delete data["driving_licence"];
delete data.lunch;
console.log(data);