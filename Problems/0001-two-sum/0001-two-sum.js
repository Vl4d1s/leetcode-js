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

// O(n) Solutions:

// var twoSum = function (nums, target) {
//   const memory = {};
//   for (let i = 0; i < nums.length; i++) {
//     currentValue = nums[i];
//     currentComplimentValue = target - currentValue;

//     if (memory[currentComplimentValue] !== undefined) {
//       return [i, memory[currentComplimentValue]];
//     } else {
//       memory[currentValue] = i;
//     }
//   }
// };

const twoSum = (nums, target) => {
  const memory = {};
  for ([index, value] of nums.entries()) {
    if (memory[value] !== undefined) return [memory[value], index];
    memory[target - value] = index;
  }
};

// 53. Maximum Subarray

const maxSubArray = (nums) => {
  let maxSubSum = nums[0];
  let currentSum = 0;

  for (let number of nums) {
    currentSum = currentSum < 0 ? 0 : currentSum;
    currentSum += number;
    maxSubSum = Math.max(maxSubSum, currentSum);
  }
  return maxSubSum;
};

// 283. Move Zeroes

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let lastNonZeroFoundAt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      swap(nums, i, lastNonZeroFoundAt);
      lastNonZeroFoundAt = lastNonZeroFoundAt + 1;
    }
  }
};

const swap = (nums, index1, index2) => {
  let temp = nums[index1];
  nums[index1] = nums[index2];
  nums[index2] = temp;
};

// https://coderbyte.com/editor/Longest%20Word:JavaScript

function LongestWord(sen) {
  let maxLengthWord = "";
  for (string of sen.split(" ")) {
    maxLengthWord =
      string.length > maxLengthWord.length ? string : maxLengthWord;
  }
  return maxLengthWord;
}

// 217. Contains Duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const memory = {};
  for (let [index, number] of nums.entries()) {
    if (memory[number] !== undefined) {
      return true;
    }
    memory[number] = index;
  }
  return false;
};


// 189. Rotate Array
function shift(arr, direction, n) {
  var times = n > arr.length ? n % arr.length : n;
  return arr.concat(arr.splice(0, direction > 0 ? arr.length - times : times));
}
