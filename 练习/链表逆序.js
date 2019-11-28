function Node(value) {
    this.value = value;
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


function nixu(root) {
    if (root.next.next == null) {
        root.next.next = root
        return root.next

    } else {
        //算法出口
        let result = nixu(root.next)
        root.next.next = root
        root.next = null
        return result
    }
}

let newRoot = nixu(node1)

function bianLink(root) {
    if (root == null) return
    console.log(root.value)
    bianLink(root.next)
}

bianLink(newRoot)


