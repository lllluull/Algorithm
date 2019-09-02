function twoSum(nums, target) {
    const maps = new Map()
    let res = []
    nums.forEach((item, index) => {
        const inMapitem = maps.get(item)
        if (inMapitem || inMapitem === 0 ) {
            res = [inMapitem, index]
        }
        maps.set((target - item), index)
    })
    return res
}

const arry = [1,2,3,4,9]
console.log(twoSum(arry, 4))