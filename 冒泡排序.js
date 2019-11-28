//排序的本质就是将最大的一个数字或者是最小的一个数字推到最右边去
//排序要做的事情就是比较和交换位置

//冒泡排序
let arr = [4, 1, 3, 2, 0, 8, 6, 5]

//比较函数
function compare(a, b) {

    if (a > b) {
        return true
    } else {
        return false

    }
}

//位置交换函数
function exchange(arr, a, b) {

    let temp = arr[a];
    arr[a] = arr[b]
    arr[b] = temp

}

//排序函数,Array原型链上的sort也是这么做的
function sort(arr) {
    for (let i = 0; i < arr.length; i++) {

        //减1减i的目的是，因为第一次就已经把最大的推到了最右边，只要比剩下的length-1个
        //然后减i的目的是为了减少遍历次数，较少不必要的比较
        for (let j = 0; j < arr.length - 1 - i; j++) {
            //双重循环，比较大小，如果为true，交换位置
            if (compare(arr[j], arr[j + 1])) {

                exchange(arr, j, j + 1)

            }
        }
    }
}

sort(arr)
console.log(arr)


