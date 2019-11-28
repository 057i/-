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


a.left = c
a.right = b
c.left = f
c.right = g
b.left = d
b.right = e


function largeSearch(rootList, target) {
    //严谨性判断
    if (rootList == null || rootList.length == 0) {
        return false
    }

    let childrenList = []

    for (let i = 0; i < rootList.length; i++) {

        //出口
        if (rootList[i] !== null && rootList[i].value == target) {
            return true
        } else {
            //添加当前结点的左孩子和右孩子
            rootList[i].left && childrenList.push(rootList[i].left)
            rootList[i].right && childrenList.push(rootList[i].right)
        }
    }
    //遍历递归自身
    return largeSearch(childrenList, target)
}

console.log(largeSearch([a], "a"))

