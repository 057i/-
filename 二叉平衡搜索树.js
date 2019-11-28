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
let h = new Node("h")
let j = new Node("j")

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g
f.right = h
g.right = j


//看树深度
function getDeep(root) {

    //存在子树返回1，不存在返回0
    if (root == null) return 0

    let leftDeep = getDeep(root.left)
    let rightDeep = getDeep(root.right)
    //一层加一个
    return Math.max(leftDeep, rightDeep) + 1
}


//看是否是平衡二叉树
function isBalance(root) {
    //只有一个根节点的情况，平衡
    if (root == null) {
        return true
    }

    let leftDeep = getDeep(root.left)
    let rightDeep = getDeep(root.right)
    if (Math.abs(leftDeep - rightDeep) > 1) {
        //左右子树不平衡
        return false
    } else {
        //递归判定根左右子树是否相等，并关系
        return isBalance(root.left) && isBalance(root.right)
    }
}

console.log(getDeep(a))
console.log(isBalance(a))
