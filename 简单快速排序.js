//简单快速排序

let arr = [4, 1, 3, 2, 0, 8, 6, 5]


function quickSort(arr) {
    //严谨性判断
    if (arr == null || arr.length == 0) {
        return []
    }

    //比较大小，小的放左边，大的放右边
    let leader = arr[0]
    let left = []
    let right = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < leader) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    //递归左边和右边
    left = quickSort(left)
    right = quickSort(right)

    left.push(leader)
    return left.concat(right)
}


console.log(quickSort(arr))
