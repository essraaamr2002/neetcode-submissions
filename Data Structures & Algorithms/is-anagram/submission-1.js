class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
  // لو الطول مختلف → مش anagram
  if (s.length !== t.length) return false;

  const map = {};

  // عد الحروف في s
  for (let char of s) {
    map[char] = (map[char] || 0) + 1;
  }

  // طرح الحروف باستخدام t
  for (let char of t) {
    // لو الحرف مش موجود أو خلص
    if (!map[char]) return false;

    map[char]--;
  }

  return true;
}
}