//ARRAY
let a =["manisha","soumya","amu","supriya"];
console.log(a.length);//syntax for checking the length of an array
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);


console.log(a[0],a[1],a[2],a[3]);
//printing all the element of an array at once
for(let i=0;i<a.length;i++){
 console.log(a[i]); 
}
 // here i stands for index of array       

//add a new element at the end of an array by using (push operator)
a.push("biju");// syntax: arrayname.push(element);
console.log(a);

// by using push operator we can add multiple data into the array

// to remove the last element of an array we use (pop operator)
a.pop("biju");// syntax: arrayname.pop(element);
console.log(a);

// to remove multiple data from array  & we can use loop
a.pop()
a.pop()
a.pop()
console.log(a);

// to creat a copy of an array by using(spread operator...)
let copy =[...a]; //syntax: let nameofnewarray =[... name of the array to be copy]
console.log(copy);

// we can add new element while copying an array
let copy1 =["goku","vegita",...a];
console.log(copy1);

//how to replace an element in an array
a[1]="somya";//syntax: arrayname[index]="new element";
console.log(a);


// revers of a an arry
let arr =[1,2,3,4,5];
let n = 6;
let a = [];
for(let i=n-1;i>=0;i--){
//console.log(arr);
a.push(arr[i]);
}
for (let j = 0; j <=a.length; j++){
console.log(a[j]); 
}
     