fn missing_number(nums: Vec<i32>) -> i32 {
    let mut a = vec![0i32; nums.len()+1];
    for i in nums.iter() {
        a[*i as usize] = 1
    }
    for (i, n) in a.iter().enumerate() {
        if *n == 0 {
            return i as i32
        }
    }
    -1
}


fn main() {
    println!("{}", missing_number(vec![3,0,1]));
}