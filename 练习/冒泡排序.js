let arr = [4, 1, 3, 2, 0, 8, 6, 5]


function compare(a, b) {
    if (a > b) {
        return true
    } else {
        return false
    }
}


function exchange(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}


function sort(arr) {
    if (arr == null || arr.length == 0) {
        return []
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (compare(arr[j], arr[j + 1])) {
                exchange(arr, j, j + 1)
            }
        }
    }
}
sort(arr)
console.log(arr)

