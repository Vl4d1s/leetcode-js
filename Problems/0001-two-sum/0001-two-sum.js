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
const rotate = (nums, k) =>
  nums.concat(
    nums.splice(
      0,
      k > nums.length ? nums.length - (k % nums.length) : nums.length - k
    )
  );

// 344. Reverse String
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => s.reverse().join("");


// 412. Fizz Buzz
/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
  const answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(getString(i + 1));
  }
  return answer;
};

const getString = (number) => {
  if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
  else if (number % 3 === 0) return "Fizz";
  else if (number % 5 === 0) return "Buzz";
  else return number.toString();
};

// 136. Single Number
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  const memory = {};
  for (const number of nums) {
    memory[number] = memory[number] + 1 || 1;
  }

  return Object.entries(memory)?.find((keyValue) => keyValue[1] === 1)?.[0];
};


var longestPalindrome = function (s) {
  let currentLongest = [0, 1];

  for (let i = 1; i < s.length; i++) {
    const odd = expandAroundCenter(s, i - 1, i + 1); // treating the given letter as a center and checking its surrounding letters
    const even = expandAroundCenter(s, i - 1, i); // checking if the  center is between the given letter and the previous letter
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even; // choosing the longest palindrome between odd and even
    currentLongest =
      currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
        ? currentLongest
        : longest; // comparing the longest to the current longest palindrome and updating current longest accordingly
  }
  return s.slice(currentLongest[0], currentLongest[1]);
};

function expandAroundCenter(s, leftIdx, rightIdx) {
  while (leftIdx >= 0 && rightIdx < s.length) {
    if (s[leftIdx] !== s[rightIdx]) break;
    leftIdx--;
    rightIdx++;
  }
  return [leftIdx + 1, rightIdx];
}
