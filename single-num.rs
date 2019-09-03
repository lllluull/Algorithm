fn single_num(nums: Vec<i32>) -> i32 {
    let mut ret : i32 = nums[0];
    for i in &nums[1..] {
        ret ^= i
    }
    ret
}