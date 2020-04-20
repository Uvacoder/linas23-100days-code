/* 
Write a JavaScript program to replace the names of multiple object keys with the values provided. 
*/



const rename_keys = (keys,obj) =>{
    Object.keys(keys).every(key=>{
        var temp = obj[key];
        delete obj.key;
        obj[keys[key]] = temp;
    })
    return obj
}


const obj = { name: 'Bobo', job: 'Programmer', shoeSize: 100 };
console.log("Original Object");
console.log(obj);
console.log("-------------------------------------");
result = rename_keys({ name: 'firstName', job: 'Actor' }, obj);
console.log("New Object");
console.log(result);


/* 
const rename_keys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );

*/