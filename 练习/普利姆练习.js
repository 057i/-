let max = 100000
let pointSet = []//点集
let distance = [
    [0, 4, 7, max, max],
    [4, 0, 8, 6, max],
    [7, 8, 0, 5, max],
    [max, 6, 5, 0, 7],
    [max, max, max, 7, 0]
]

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

//寻找结点对应的行数的序号
function getCurIndex(str) {
    for (let i = 0; i < pointSet.length; i++) {

        if (str === pointSet[i].value) {
            return i
        }
    }
    return -1
}

function getMinDisNode(pointSet, distance, nowPointSet) {
    let fromNode = null
    let minNode = null
    let minDis = max


    for (let i = 0; i < nowPointSet.length; i++) {
        let nowPointIndex = getCurIndex(nowPointSet[i].value)
        console.log(nowPointSet[i], nowPointIndex, 889)
        for (let j = 0; j < distance[nowPointIndex].length; j++) {
            //判断是否在已经寻找过的点集中，并且权值最小

            let thisNode = pointSet[j]
            if (nowPointSet.indexOf(thisNode) < 0 && distance[nowPointIndex][j] < minDis) {
                // console.log(nowPointSet, pointSet[j], distance[nowPointIndex][j], minDis)
                fromNode = nowPointSet[i]
                minNode = thisNode
                minDis = distance[nowPointIndex][j]

            }
        }
    }
    fromNode.neighbor.push(minNode)
    minNode.neighbor.push(fromNode)
    //将最小距离的点返回，不是将算完的数组返回
    return minNode
}


//传入点集，邻接表，和起始点，寻找最小边
function prim(pointSet, distance, start) {
    //记录当前已经寻找过的点
    let nowPonitSet = []
    nowPonitSet.push(start)

    while (true) {
        let minDisPoint = getMinDisNode(pointSet, distance, nowPonitSet)
        nowPonitSet.push(minDisPoint)
        if (nowPonitSet.length == pointSet.length) {
            break
        }
    }


}

prim(pointSet, distance, pointSet[2])
console.log(pointSet)
