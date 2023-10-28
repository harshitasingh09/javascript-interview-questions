array=["pen ", "camera", "phone", "notebook", "headphone", "laptop", "light bulb", "usb drive", "elephant"];

//removing last element from array
const result= array.pop();
console.log(result);


//sorting alphabetically by default
const result2= array.sort();
console.log(result2);

// last element to 0 index
const result3= array.pop();
const newArr = array.unshift(result3);
console.log(array);

//
const indexOFUSB= array.indexOf("usb drive");
console.log(indexOFUSB)
if (indexOFUSB!== -1){ 
 array.push(array.splice(indexOFUSB,1));
 console.log(array);

}

//
const indexLaptop= array.indexOf("laptop");
array.splice(indexLaptop,1);
console.log(array); 