fn merge(nums1: & mut Vec<i32>, m: i32, nums2: & mut Vec<i32>, n: i32) {
    let mut k = m - 1;
    let mut j = n - 1;
    let mut i = m + n - 1;
    while k > 0 && j > 0 {
        if nums1[k as usize] > nums2[j as usize] {
            nums1[i as usize] = nums1[k as usize];
            k -= 1
        } else {
            nums1[i as usize] = nums2[j as usize];
            j -= 1
        }
        i -= 1
    };
    while k > 0 {
        nums1[i as usize] = nums1[k as usize];
        i -= 1;
        k -= 1;
    }
    while i > 0 {
        nums1[i as usize] = nums2[j as usize];
        i -= 1;
        j -= 1
    }
}