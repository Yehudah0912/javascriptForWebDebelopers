for (const i = 0; i < 10; ++i) {}  // TypeError: assignment to constant variable

for (const value of [1,2,3,4,5]){
  setTimeout(() => {
    console.log(value);
  }, 0);
}
for (const iterator of object) {
  
}

for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
    
  }
}
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}




