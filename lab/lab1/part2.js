/* =====================
  # Lab 1, Part 2 — Functions as Values

  Functions can be passed as values to other functions. Each exercise here builds on that theme.
===================== */

/* =====================
Instructions: Write a function that *always* returns the number 1.
===================== */
var justOne = function(num) {
    num =1;
    return num;
};

console.log('justOne success:', justOne() === 1);

/* =====================
Instructions: Write a function that returns true if a number is even.
===================== */
var isEven = function(num) {
  if(num % 2 === 0 ){
    return true;
  }
  else{
    return false;
  }
};

console.log('isEven success:', isEven(2) === true && isEven(3) === false);

/* =====================
Instructions: Write a function that *always* returns false.
              Use functions "justOne" and "isEven" somehow in the definition.
===================== */

var justFalse = function(num) {
    return justOne(num) && isEven(num);
};
console.log('justFalse success:', justFalse() === false);

/* =====================
Instructions: Write a function that takes a boolean value and returns its opposite.
===================== */

var not = function(thing) {
    return !thing;
};

console.log('not success:', not(true) === false);

/* =====================
Instructions: Write a function that returns true if a number is odd
              Use functions "isEven" and "not" somehow in the definition.
===================== */

var isOdd = function(num) {
    return not(isEven(num));
};
console.log('isOdd success:', isOdd(4) === false);

/* =====================
Instructions: Write a function that takes a list of numbers and returns a list with only numbers above 10
===================== */
var filterOutLessThan10 = function(list) {
    list2 =[];
    for(var i=0; i<list.length; i++){
        if (list[i] > 10){
           list2.push(list[i]);
        }
    }
    return list2;
};

var test = filterOutLessThan10([4, 11]).length === 1 && filterOutLessThan10([4, 11])[0] === 11;
console.log('filterOutLessThan10 success:', test);
/* =====================
Stretch goal — NOT required
Instructions: Let's bring it all together. Write a function that returns only odd numbers. It takes:
              1. a list of numbers
              2. a function that takes a number and returns true or false (isOdd, let's say)
===================== */

var filter = function(array, func) {
    array2 = [];
    for (var i = 0; i<array.length; i++){
      if (func(array[i])){
        array2.push(array[i]);
      }
  }
    return array2;
};
console.log('filter success:', filter([4, 11], isOdd) === array2);
console.log(array2);
