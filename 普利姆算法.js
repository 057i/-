let max = 1000000
//点集
let pointSet = []

//邻接矩阵存储点与点之间的联系
let distance = [
    [0, 4, 7, max, max],
    [4, 0, 8, 6, max],
    [7, 8, 0, 5, max],
    [max, 6, 5, 0, 7],
    [max, max, max, 7, 0]
]

//表示图的邻接点，不是树(有左右孩子)，只有邻居
function Node(value) {
    this.value = value
    this.neighbor = []
}

let a = new Node("a")
let b = new Node("b")
let c = new Node("c")
let d = new Node("d")
let e = new Node("e")


pointSet.push(a)
pointSet.push(b)
pointSet.push(c)
pointSet.push(d)
pointSet.push(e)

//找到当前下标位
function getIndex(str) {
    for (let i = 0; i < pointSet.length; i++) {
        if (str == pointSet[i].value) {
            return i
        }
    }
    return -1
}


//根据当前已有的结点，判断并且获取到距离最短的点
//三个参数，分别代表，点集，边集，以及获取到距离最短的点
function getMinDisNode(pointSet, distance, nowPointSet) {
    let fromNode = null;//线段起点
    let minDisNode = null//线段终点
    let minDis = max;//默认最短距离

    //根据当前已有的这些点为起点，依次判断连接其他的点的距离是多少
    for (let i = 0; i < nowPointSet.length; i++) {

        //当前结点的序号
        let nowPonitIndex = getIndex(nowPointSet[i].value)


        //对应邻接表的当前结点所对应的行
        for (let j = 0; j < distance[nowPonitIndex].length; j++) {
            let thisNode = pointSet[j]

            //不在已经查找过的点的数组里面，并且权值小于最小权值
            if (nowPointSet.indexOf(thisNode) < 0 && distance[nowPonitIndex][j] < minDis) {
                fromNode = nowPointSet[i]
                minDisNode = thisNode
                minDis = distance[nowPonitIndex][j]
            }
        }
    }
    fromNode.neighbor.push(minDisNode)
    minDisNode.neighbor.push(fromNode)
    return minDisNode
}

//普利姆算法生成最短路径
function prim(pointSet, distance, start) {
    let nowPointSet = []
    //将起始点加入已经查找过的点的数组
    nowPointSet.push(start)

    while (true) {
        let minDisNode = getMinDisNode(pointSet, distance, nowPointSet)
        nowPointSet.push(minDisNode)
        console.log("===")
        if (nowPointSet.length == pointSet.length) {
            break
        }
    }
}

prim(pointSet, distance, pointSet[2])
console.log(pointSet)







