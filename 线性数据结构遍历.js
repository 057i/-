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


//线性遍历链表
function bianLink(root) {
    let temp = root;
    while (true) {
        //严谨性判断，判断temp是否为空
        if (temp != null) {
            console.log(temp.value)
        } else {
            break
        }
        //将下一个结点的值赋值给当前
        temp = temp.next
    }
}
bianLink(node1)


//递归遍历链表
function bianLink1(root) {

    //遍历的出口
    if (root == null) {
        return
    }
    console.log(root.value)
    bianLink1(root.next)

}
bianLink1(node1)
