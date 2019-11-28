let zhong = ["f", "c", "g", "a", "d", "b", "e"]
let hou = ["f", "g", "c", "d", "e", "b", "a"]

function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

function f(zhong, hou) {
    if (zhong == null || hou == null || zhong.length == 0 || hou.length == 0 || zhong.length != hou.length) {
        return null
    }
    let root = new Node(hou[hou.length - 1])//保存根节点
    let index = zhong.indexOf(hou[hou.length - 1])//保存中序根节点的位置
    let zhongLeft = zhong.slice(0, index)//中序左子树
    let zhongRight = zhong.slice(index + 1, zhong.length)//中序右子树
    let houLeft = hou.slice(0, index)//后序左子树
    let houRight = hou.slice(index, zhong.length - 1)//后序右子树
    root.left = f(zhongLeft, houLeft)
    root.right = f(zhongRight, houRight)
    return root
}

let root = f(zhong, hou)
console.log(root)
