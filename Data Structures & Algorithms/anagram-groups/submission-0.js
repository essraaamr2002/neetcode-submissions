class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map={};
         for(let word of strs){
            const sort=word.split('').sort().join('')
            if(!map[sort]){
                map[sort]=[]
            }
            map[sort].push(word)
         }
         return Object.values(map)
    }
}
