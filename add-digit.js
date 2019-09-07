const add_digit = nums => {
    while (nums % 10 !== nums) {
        nums = nums % 10 + parseInt(nums / 10, 10)
    }
    return nums
}


console.log(add_digit(38))