use std::collections::HashSet;

fn number_to_array(nums: i32) -> Vec<i32>{
    let mut n : i32 = nums;
    let mut array : Vec<i32> = vec![];
    while n > 0 {
        array.push(n%10);
        n = n / 10;
    }
    array
}

fn happy_number(nums: i32) -> bool {
    let mut n = nums;
    let mut set: HashSet<i32> = HashSet::new();
    set.insert(n);
    loop {
        let arry = number_to_array(n);
        n = arry.iter().map(|x| x*x).sum();
        if n == 1 {
            return true
        }
        if set.contains(&n) {
            return false
        }
        set.insert(n);
    }
}





fn main() {
    println!("{}", happy_number(19))
}