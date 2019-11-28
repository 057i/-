let qian = ["a", "c", "f", "g", "b", "d", "e"]
let zhong = ["f", "c", "g", "a", "d", "b", "e"]

function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}


function f(qian, zhong) {
    //严谨性判断
    if (qian == null || zhong == null || qian.length == 0 || zhong.length == 0 || qian.length != zhong.length) {
        return null
    }
    let root = new Node(qian[0])
    let index = zhong.indexOf(root.value)//找到根节点在中序遍历中的位置，判断子树长度
    let qianLeft = qian.slice(1, 1 + index)//前序左子树
    let qianRight = qian.slice(1 + index, qian.length)//前序右子树
    let zhongLeft = zhong.slice(0, index)//中序左子树
    let zhongRight = zhong.slice(index + 1, zhong.length)//中序右子树

    root.left = f(qianLeft, zhongLeft)//递归遍历左子树
    root.right = f(qianRight, zhongRight)
    return root

}

let root = f(qian, zhong)
console.log(root)
