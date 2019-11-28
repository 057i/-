//左右子树没有交换的情况
function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

let a1 = new Node("a")
let b1 = new Node("b")
let c1 = new Node("c")
let d1 = new Node("d")
let e1 = new Node("e")
let f1 = new Node("f")
let g1 = new Node("g")

a1.left = c1
a1.right = b1
c1.left = f1
c1.right = g1
b1.left = d1
b1.right = e1


let a2 = new Node("a")
let b2 = new Node("b")
let c2 = new Node("c")
let d2 = new Node("d")
let e2 = new Node("e")
let f2 = new Node("f")
let g2 = new Node("g")

a2.left = c2
a2.right = b2
c2.left = f2
c2.right = g2
b2.left = d2

// b2.right = e2


function compareTree(root1, root2) {
    //是同一棵树,直接相等直接返回true
    if (root1 == root2) {
        return true
    }

    //两个结点中仅有一个结点存在，，返回false
    if (root1 == null && root2 != null || root1 != null && root2 == null) {
        console.log(root1, root2)
        return false
    }

    //结点位置相同但是，值直接不相等的情况下
    if (root1.value != root2.value) {
        return false
    }

    //递归接下来的层次
    let left = compareTree(root1.left, root2.left)
    let right = compareTree(root1.right, root2.right)
    return left && right

}

console.log(compareTree(a1, a2))

