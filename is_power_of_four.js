const is_power_of_four = nums => 
    Array(16).fill(undefined).some((_, index) =>  nums === (1 << index * 2 ))


console.log(is_power_of_four(16))
