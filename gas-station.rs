fn check(i:usize, gas: &Vec<i32>, cost: &Vec<i32>) -> bool {
    let mut total = gas[i];
    for x in 1usize..= gas.len() {
        let next = (x +i) % gas.len();
        let prev = (next + gas.len() - 1) % gas.len();
        total -= cost[prev];
        if total <  0 {
            return false
        }
        total += gas[next]
    }
    true
}

fn gas_truck(gas: Vec<i32>, cost: Vec<i32>) -> i32 {
    for i in 0..gas.len() {
        if check(i, &gas, &cost) {
            return i as i32
        }
    }
    -1
}


fn main() {
    let a = vec![1,2,3,4,5];
    let b = vec![3,4,5,1,2];
    println!("{}", gas_truck(a, b))
}