
const str = "Harshita"
const arr = [{name: "Shivram"}, {name: "Harshita"}]
const surname= [{surname:"kashyap"}, {surname: "Singh"}];

 const arr1 = arr.map((i,index)=>{
 console.log( [{name : i.name +" "+ surname[index].surname}])
//  console.log(arr1);
 });
 
 