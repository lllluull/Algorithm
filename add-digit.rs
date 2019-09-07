fn add_digit(nums: i32) -> i32 {
    let mut n = nums;
    while n % 10 != n {
        n = n % 10 + n / 10;
    }
    n
}




fn main() {
    println!("{}", add_digit(38))
}