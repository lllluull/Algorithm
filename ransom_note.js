const ransom_note = (random, magzine) => {
    let maps = new Map()
    let isNice = true
    magzine.split("").forEach(item => {
       let i = maps.get(item)
       if(i) {
           i += 1
           maps.set(item, i)
       } else {
           maps.set(item, 1)
       }
    })
    random.split("").forEach(item => {
        let i = maps.get(item)
        if (!i ) {
            isNice = false
        } else {
            i -= 1
            maps.set(item, i)
        }
    })
    return isNice
}

console.log(ransom_note("aase", "aasd"))