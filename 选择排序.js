//快速排序
//排序没有优劣之分，只有适不适合当前的场景
//冒泡排序比较适合有序的排序
//选择排序比较适合混乱的排序

let arr = [4, 1, 3, 2, 0, 8, 6, 5]

//比较函数
function compare(a, b) {
    if (a > b) {
        return true
    } else {
        return false
    }


}

//交换函数
function exchange(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}
//选择排序函数
function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (compare(arr[j], arr[j + 1])) {
                exchange(arr, j, j + 1)
            }
        }
    }
}

selectSort(arr)
console.log(arr)
