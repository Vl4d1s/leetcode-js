/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// O(n^2) Solution:

// var twoSum = function(nums, target) {
//     for(let i=0; i<nums.length; i++){
//         for(let j=i+1; j<nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 return [i,j]
//             }
//         }
//     }
// };

// O(n) Solution:

var twoSum = function (nums, target) {
  const memory = {};
  for (let i = 0; i < nums.length; i++) {
    currentValue = nums[i];
    currentComplimentValue = target - currentValue;

    if (memory[currentComplimentValue] !== undefined) {
      return [i, memory[currentComplimentValue]];
    } else {
      memory[currentValue] = i;
    }
  }
};
