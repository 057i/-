//先进后出
function Stack() {
    this.arr = []
    this.push = function (value) {
        this.arr.push(value)
    }
    this.pop = function () {
        this.arr.pop()
    }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.arr)
stack.pop()
console.log(stack.arr)

//先进先出
function Queue() {
    this.arr = []
    this.push = function (value) {
        this.arr.push(value)
    }
    this.pop = function () {
        this.arr.shift()
    }
}

let queue = new Queue()
queue.push(5)
queue.push(6)
queue.push(7)
console.log(queue.arr)
queue.pop()
console.log(queue.arr)

