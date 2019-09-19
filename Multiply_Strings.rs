fn mul(a: String, b: String) -> String {
    let  mut c = 0;
    for (i, v) in a.chars().rev().enumerate() {
        for (i2, v2) in b.chars().rev().enumerate() {
            c += v.to_digit(10).unwrap() * v2.to_digit(10).unwrap() * (10 as u32).pow(i as u32 + i2 as u32)
        }
    }
    c.to_string()
}

fn main() {
    println!("{}", mul("123".to_string(), "345".to_string()))
}