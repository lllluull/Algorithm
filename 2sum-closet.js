/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    const len = nums.length
    if(len < 3) return null
    let res = nums[0] + nums[1] + nums[2]
    const numss = nums.sort((a, b) => a - b)
    for (let i = 0; i < len - 2; i ++) {
        let left = i + 1;
        let right = len - 1
        while(left < right) {
           const tempRes = numss[i] + numss[left] + numss[right]
           if( Math.abs(res - target) > Math.abs(tempRes - target)) {
                res = tempRes
            }
           if(tempRes - target > 0) {
               right --
           } else if(tempRes - target < 0) {
               left ++
           } else {
            res =  tempRes
            break
           }
           
        }
    }
    return res
};

console.log(threeSumClosest([-1, 2, 1, -4], 1))