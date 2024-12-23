function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  //Strictly compare with 0
  if(a === 0 || b === 0){
    return a + b;
  }
  return a + b; 
}