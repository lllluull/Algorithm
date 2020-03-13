/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 
var threeSum = function(nums) {
    const len = nums.length
    if(len < 3) return []
    const res = []
    const numss = nums.sort((a, b) => a - b )
    for (let i = 0; i < len; i ++) {
        if(nums[i] > 0) break
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = len - 1
        while(left < right) {
            if(numss[i] + numss[left] + numss[right] === 0) {
                res.push([numss[i], numss[left], numss[right]])
                while(numss[left] === numss[left+1]) {
                    left ++
                }
                left ++ 
                while(numss[right] === numss[right - 1]) {
                    right --
                }
                right --
            }  else if (numss[i] + numss[left] + numss[right] > 0) {
                right --
            } else {
                left ++
            }
        }
    }
    return res
};


console.log(threeSum([-1,0,1,2,-1,-4]))