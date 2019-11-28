//标准快排，有问题！！！

let arr = [4, 1, 6, 2, 0, 8, 5]

//交换函数
function swap(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

function quickSort2(arr, begin, end) {
    if (begin >= end - 1) return

    let left = begin
    let right = end

    do {
        do {
            //从左边开始
            left++
        } while (left < right && arr[left] < arr[right])

        do {
            //从右边开始
            right--
        } while (right > left && arr[right] > arr[left])
        if (left < right) {
            swap(arr, left, right)
        }
    } while (left < right)

    let swapPoint = left == right ? right - 1 : right
    swap(arr, begin, swapPoint)
    quickSort2(arr, begin, swapPoint)
    quickSort2(arr, swapPoint + 1, end)

}

function quickSort1(arr) {

    quickSort2(arr, 0, arr.length)
}

quickSort1(arr)
console.log(arr)

