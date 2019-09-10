const missing_number = array => {
    const temp = Array(array.length).fill(0)
    array.forEach(item => {
        temp[item] = 1
    });
    return temp.findIndex(item => item === 0)
}

console.log(missing_number([0,1,3]))