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

//中序遍历算法代码
function f1(root) {
    //严谨性判断
    if (root == null) return
    f1(root.left)
    console.log(root.value)
    f1(root.right)

}

f1(a)

