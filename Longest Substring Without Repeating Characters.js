/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} 
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longNumber = 0
    const sArray = s.split('')
    let tempArray = []
    sArray.forEach(item => {
        const index = tempArray.indexOf(item)
        if(index >= 0) {
            const length = tempArray.length
            longNumber = longNumber > length ? longNumber : length
            tempArray = tempArray.slice(index + 1)
            tempArray.push(item)
        } else {
            tempArray.push(item)
        }
    })
    const length = tempArray.length
    return length > longNumber ? length : longNumber
};

