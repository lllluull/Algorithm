const plus_one = array =>  (+array.join("") + 1).toString().split("").map(item => +item)

const a = [1,2,3,9]

console.log(plus_one(a))