function nestedArray(arr, n){
    let res = []
    for(let i = 0; i < n; i++){
        for(let j = 0; j < arr.length; j++)
            if(typeof arr[j] == "object")
                res.push(...arr[j])
            else
                res.push(arr[j])
        arr = res
        res = []
    }
    return arr
}

let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, [5, 4, 3, 2], 11], 12], [13, 14, 15]]
console.log(nestedArray(arr, 1))



arr = [[[8]], [2], [4], [5, [4, [3, [95, [56, [1, [84, [1], 8], 9], 87], 8], 24], [15], [18]]]]
console.log(nestedArray(arr, 1))
