use std::collections::HashMap;

fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let mut map : HashMap<i32, i32> = HashMap::new();
    for (i, v) in nums.iter().enumerate() {
        match map.get(v) {
            Some(&index) => { return vec![index, i as i32] }
            _ => { map.insert(target - v, i as i32); }
        }
    }
    vec![]
}



fn main() {
    let nums = vec![1,2,3,4,5];
    println!("{:?}", two_sum(nums, 7)) 
}