function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

let a = new Node("a")
let b = new Node("b")
let c = new Node("c")
let d = new Node("d")
let e = new Node("e")
let f = new Node("f")
let g = new Node("g")

a.left = c
a.right = b
c.left = f
c.right = g
b.left = d
b.right = e

function deepSearch(root, target) {
    //严谨性判断
    if (root == null || root.length == 0) {
        return false
    }
    //如果当前的根节点是要搜索的值
    if (root.value == target) {
        return true
    }
    let left = deepSearch(root.left, target)
    let right = deepSearch(root.right, target)
    return left || right
}

console.log(deepSearch(a, "a"))


