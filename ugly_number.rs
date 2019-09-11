fn ugly_number(nums: i32) -> bool {
    let mut n = nums;
    for i in [2, 3, 5].iter() {
        while n > 1 && n % i == 0 {
            n /= i
        }
    }
    n == 1
}

fn main() {
    println!("{}", ugly_number(12));
}
