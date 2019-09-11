const fugly_number = nums => {
    [2, 3, 5].forEach(item => {
        while(nums > 1 && nums % item === 0 ) {
            nums = parseInt(nums / item, 10) 
        }
    })
    return nums === 1
}



console.log(fugly_number(13))