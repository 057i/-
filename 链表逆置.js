//必须要先搞定逆置和递归的思路，算法体系依赖于这两个

//突破点在于先找到最后一个结点
//递归的正确思路是先写出口
function Node(value) {
    this.value = value
    this.next = null
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

function nizhi(root) {
    if (root.next.next == null) {//代表当前是倒数第二个结点
        root.next.next = root//让最后一个结点指向自己家(倒数第二个结点)
        return root.next
    } else {
        let result = nizhi(root.next)
        root.next.next = root
        root.next = null
        return result
    }
}

let newRoot = nizhi(node1)

function bianLink(root) {
    if (root == null) return
    console.log(root.value)
    bianLink(root.next)
}

bianLink(newRoot)




