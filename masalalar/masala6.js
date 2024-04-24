function countWords(arr){
    let res = {}
    for(let i = 0; i < arr.length; i++){
        if(res[arr[i]] == undefined)
            res[arr[i]] = 0
        res[arr[i]] = res[arr[i]] + 1
    }
    return res
}


const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit']
console.log(countWords(animals))