fn ransom_note(random: String, magzine: String) -> bool {
    let mut maps : HashMap<char, i32> = HashMap::new();
    for i in magzine.chars() {
        maps.entry(i).and_modify(|x| *x += 1).or_insert(1);
    }
    for i in random.chars() {
        match maps.get_mut(&i) {
            Some(x) => {
                *x -= 1;
                if *x < 0 {
                    return false
                }
            }
            _ => { return false }
        }
    }
    true
}




fn main() {
    assert_eq!(ransom_note("aa".to_string(), "aab".to_string()), true);
    assert_eq!(ransom_note("aa".to_string(), "ab".to_string()), false);
    assert_eq!(ransom_note("a".to_string(), "b".to_string()), false);
}