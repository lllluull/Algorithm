const signleNumber = nums => {
    const ret = nums[0]
    nums.forEach((item, index) => {
        if(index > 0) {
            ret ^= item
        }
    })
    return ret
}