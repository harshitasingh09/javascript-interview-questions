// adding surname to name array
const str = "Harshita"
const arr = [{name: "Shivram"}, {name: "Harshita"}]
const surname= [{surname:"kashyap"}, {surname: "Singh"}];

 const arr1 = arr.map((i,index)=>{
 console.log( [{name : i.name +" "+ surname[index].surname}])
//  console.log(arr1);
 });
 
 const combinedArray = arr.map((person, index) => {
    return { name: `${person.name} ${surname[index].surname}` };
  });


  // reversing string 
  const str1= "harshita";
  let reversedStr='';
  for(let i=str1.length-1;i>=0;i--)
  {
    reversedStr =reversedStr + str[i];
  }
console.log(reversedStr);

// alternate way

const result= str1.split('').reverse().join('');
console.log(result);
 