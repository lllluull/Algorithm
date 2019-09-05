const check = (i, gas, cost) => {
    let total = gas[i]
    const len = gas.length
    let ret = true
    for(let x = 1; x < len + 1 ; x++) {
        const next = (x + i) % len
        const prev = (next + len - 1) % len
        total -= cost[prev]
        if (total < 0) {
            ret = false
        }
        total += gas[next]
    }
    return ret
}

const gasStation = (gas, cost) => {
    const len = gas.length
    let index = -1
    for(let i = 0; i < len; i++) {
        if(check(i, gas, cost)) {
            index = i
            break
        }
    }
    return index
}


const gas = [1,2,3,4,5]
const cost = [3,4,5,1,2]
console.log(gasStation(gas, cost))


