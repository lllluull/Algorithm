fn is_power_of_four(nums: i32) -> bool {
    for i in 0..16 {
        let n = i * 2;
        if nums == ( 1 << n) {
            return true
        }
    }
    false
}

fn main() {
    println!("{}", is_power_of_four(16))
}