const number_to_array = n => {
    const arry = []
    while (n > 0) {
        arry.push(n % 10)
        n = parseInt(n / 10, 10)
    }
    return arry
}

const happy_number = (n , arr=[])=> {
    let nums = number_to_array(n).reduce((acu, cur) => acu + cur * cur, 0)
    if(nums === 1) return true
    if(arr.includes(nums)) return false
    arr.push(nums)
    return happy_number(nums, arr)
}


console.log(happy_number(21))