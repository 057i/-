let arr = []
for (let i = 0; i < 100; i++) {
    arr[i] = Math.floor(Math.random() * 1000)
}

//默认将二叉搜索树的第一个元素作为根节点排序，并且构建一颗有序树

function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

//添加结点函数
function addNode(root, num) {
    //判断当前结点是否存在，或者是当前节点的值和要插入结点的值相等
    if (root == null || root.value == num) {
        return
    }

    //判断当前值是否比结点值大
    if (root.value < num) {
        //判断当前节点的右子树是否为空
        if (root.right == null) {
            root.right = new Node(num)
        } else {
            addNode(root.right, num)
        }
    } else {
        //判断当前结点的左子树是否为空
        if (root.left == null) {
            root.left = new Node(num)
        } else {
            addNode(root.left, num)
        }
    }
}

function buildSearchTree(arr) {
    //严谨性判断
    if (arr == null || arr.length == 0) {
        return null
    }
    let root = new Node(arr[0])
    for (let i = 0; i < arr.length; i++) {
        addNode(root, arr[i])
    }

    return root
}

//改变存储结构
function searchByTree(root, target) {
    if (root == null || target == null) return false

    if (root.value == target) return true
    if (root.value < target) {
        return searchByTree(root.right, target)
    } else if (root.value > target) {
        return searchByTree(root.left, target)
    }
}


let root = buildSearchTree(arr)

console.log(root)
console.log(searchByTree(root, 100))
