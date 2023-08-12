// const numbers = [12, 5, 23, 8, 17, 9];

// const maxNumber = numbers.reduce((max, currentValue) => {
//     
//   if (currentValue > max) {
    
//     return currentValue;
//   }
//   return max;
// }, numbers[1]);

// console.log(maxNumber);

// array.reduce(callback, initialValue);

Array.prototype.customReducer = function(callback, initialvalue){
    let accum = initialvalue;
    for (i=0 ; i<this.length ; i++){
        if(accum){
            accum = callback(accum,this[i])
        }
        else{
            accum = this[i]
        }
            
    }
    return accum;
}

const numbers = [12, 5, 23, 8, 17, 9];

const maxNumber = numbers.customReducer((max, currentValue) => {
    console.log(currentValue, max)
  if (currentValue > max) {    
    return currentValue;
  }
  return max;
}, numbers[0]);

console.log(maxNumber);