function hasTargetSum(array, target) {
  // Write your algorithm here
  for( let i = 0; i < array.length; i++){
       for( let j = i + 1; j < array.length; j++){

        if (array[i] + array[j] === target){
          console.log("These are the numbers that return true: ",array[i], array[j]);
          return true;
        }
       }
  }
 return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n*n)
*/

/* 
  Add your pseudocode here
  write a function that takes 2 arguement, an array of integers, and a target integer. 
  function should return true if any pair of integers in the array adds up to the target integer
  use 2 for loops. 1 for the first number being added. the second for the other numbers being iterated through the array

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
