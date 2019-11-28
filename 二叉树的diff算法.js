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

a1.left = b1
a1.right = c1
b1.left = e1
b1.right = d1
c1.left = g1
c1.right = f1

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
b2.right = e2

//diffList是做了哪些修改
function diffTree(root1, root2, diffList) {

    //出口
    if (root1 == root2) {

        return diffList

    }
    if (root1 == null && root2 != null) {
        diffList.push({type: "增加", origin: root1, now: root2})
    } else if (root1 != null && root2 == null) {
        diffList.push({type: "删除", origin: root1, now: root2})
    } else if (root1.value != root2.value) {

        diffList.push({type: "修改", origin: root1, now: root2})

        //diff算法的坑;如果父节点更新了，子节点不需要更新;以此类推，
        //如果父节点整个更新了，则要将之前父节点下的所有子节点，重新挂载到新的父节点下
        diffTree(root1.left, root2.left, diffList)
        diffTree(root1.right, root2.right, diffList)

    } else {
        diffTree(root1.left, root2.left, diffList)
        diffTree(root1.right, root2.right, diffList)
    }
}

let myDiffList = []

diffTree(a1, a2, myDiffList)
console.log(myDiffList)

