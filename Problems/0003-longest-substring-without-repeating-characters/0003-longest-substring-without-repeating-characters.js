/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let max = 0;
  let end = 0;
  let hash = {};

  for (start = 0; start < s.length; start++) {
    end =
      hash[s[start]] !== undefined && hash[s[start]] >= end
        ? hash[s[start]] + 1
        : end;
    hash[s[start]] = start;
    max = Math.max(max, start - end + 1);
  }

  return max;
};
