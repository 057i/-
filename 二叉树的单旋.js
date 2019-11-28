function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

let node2 = new Node("2")
let node5 = new Node("5")
let node3 = new Node("3")
let node6 = new Node("6")

node2.right = node5
node5.left = node3
node5.right = node6


function getDeep(root) {
    if (root == null) {
        return 0
    }
    let leftDeep = getDeep(root.left)
    let rightDeep = getDeep(root.right)
    //寻找左右子树的最大值加1
    return Math.max(leftDeep, rightDeep) + 1
}


function isBalance(root) {
    //根节点为空，左右子树平衡
    if (root == null) {
        return true
    }
    let leftDeep = getDeep(root.left)
    let rightDeep = getDeep(root.right)
    //左右子树高度差大于1，非平衡二叉树
    if (Math.abs(leftDeep - rightDeep) > 1) {
        return false
    } else {
        //否则继续往当前节点下的左右子树继续判断是否是平衡二叉树
        return isBalance(root.left) && isBalance(root.right)
    }
}

//左单旋
function leftRotate(root) {
    let newRoot = root.right
    root.right = root.right.left
    newRoot.left = root
    return newRoot

}

//右单旋
function rightRotate(root) {
    let newRoot = root.left
    root.left = root.left.right
    newRoot.right = root
    return newRoot


}

//更改为平衡二叉树的函数
function change(root) {
    //如果传进来的根是平衡树，直接返回
    if (isBalance(root)) return root

    //左右单旋的前提是结点都聚集在某一个子树上
    if (root.left != null) {
        root.left = change(root.left)
    }
    if (root.right != null) {
        root.right = change(root.right)
    }

    let leftDeep = getDeep(root.left)
    let rightDeep = getDeep(root.right)
    //左右子树高度差不超过1，为平衡树
    if (Math.abs(leftDeep - rightDeep) <= 1) {
        return true

    } else if (leftDeep < rightDeep) {
        //左低右高，左单旋操作
        return leftRotate(root)

    } else {
        //左高右低，右单旋操作
        return rightRotate(root)
    }

}

console.log(getDeep(node2))
console.log(isBalance(node2))

let newRoot = change(node2)
console.log(newRoot)
