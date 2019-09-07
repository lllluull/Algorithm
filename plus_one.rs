fn number_to_array(nums:i32) -> Vec<i32> {
    let mut n = nums;
    let mut array: Vec<i32> = vec![];
    while n > 0 {
        array.push(n%10);
        n = n / 10;
    }
    array.reverse()
}

fn array_to_number(array:Vec<i32>) -> i32 {
    let mut n: i32  = 0;
    let b : i32 =  10;
    for (i, v) in array.iter().rev().enumerate() {
        n = n + b.pow(i as u32) * v;
    }
    n + 1
}

fn plus_one(array: Vec<i32>) -> Vec<i32> {
    let n = array_to_number(array);
    let array = number_to_array(n);
    array
}




fn main() {
    let a = vec![1,3,4,9];
    println!("{:?}", plus_one(a))
}