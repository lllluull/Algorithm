const valid_mountain_array = array => {
    const lens = array.length
    let i = 0
    while (i < lens && array[i] < array[i+1]) i++
    if(i === 0 || i === lens -1) return false
    while (i < lens && array[i] > array[i+1]) i ++
    return i === lens - 1
}


let b = [12, 23, 34, 45, 34, 23, 67]

console.log(valid_mountain_array(b))