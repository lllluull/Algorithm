fn valid_mountain_array(a: Vec<i32>) -> bool {
    let lens = a.len();
    let mut i = 0;
    if lens < 3 {
        return false;
    }
    while i < lens - 1 && a[i] < a[i+1] {
        i += 1
    }
    if i == 0 || i == lens - 1 {
        return false;
    }

    while i < lens - 1 && a[i] > a[i+1] {
        i += 1
    }

    return i == lens - 1;
}