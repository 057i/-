function Node(value) {
    this.value = value
    //左孩子结点，右孩子结点
    this.left = null
    this.right = null
}

let a = new Node("a")
let b = new Node("b")
let c = new Node("c")
let d = new Node("d")
let f = new Node("f")
let g = new Node("g")
let e = new Node("e")

a.left = c
a.right = b
c.left = f
c.right = g
b.left = d
b.right = e

//先序遍历函数，先自己，然后左孩子递归，右孩子递归
function f1(root) {
    //严谨性判断
    if (root == null) return
    console.log(root.value)
    f1(root.left)
    f1(root.right)
}
f1(a)
