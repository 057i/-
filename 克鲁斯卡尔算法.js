let max = 100000
let pointSet = []//点集

//邻接矩阵
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


//查看当前两个点是否是可以连接的点
function canLink(resultList, tempBegin, tempEnd) {
    let beginIn = null
    let endIn = null

    for (let i = 0; i < resultList.length; i++) {

        if (resultList[i].indexOf(tempBegin) > -1) {
            beginIn = resultList[i]
        }

        if (resultList[i].indexOf(tempEnd) > -1) {
            endIn = resultList[i]
        }
        //可以连接的几种情况
        //两个点都是新的点(不在任何部落里面)，可以连接产生新的部落
        //begin在A部落，end没有部落，A部落将end包进去扩张
        //end在A部落，begin没有部落，A部落将begin包进去扩张
        //begin在A部落，end在B部落，将A,B部落合并

        //不可以连接的情况
        //邻接矩阵中数值的起始点和结束点在同一个框里面(对角线)
        if (beginIn != null && endIn != null && beginIn == endIn) {
            return false
        }
        return true
    }
}

function link(resultList, tempBegin, tempEnd) {
    let beginIn = null
    let endIn = null

    for (let i = 0; i < resultList.length; i++) {
        if (resultList[i].indexOf(tempBegin) > -1) {
            beginIn = resultList[i]
        }

        if (resultList[i].indexOf(tempEnd) > -1) {
            endIn = resultList[i]
        }

        //两个点都是新的点(不在任何部落里面)，可以连接产生新的部落
        if (beginIn == null && endIn == null) {
            let newArr = []
            newArr.push(tempBegin)
            newArr.push(tempEnd)
            resultList.push(newArr)
        } else if (beginIn != null && endIn == null) {
            //begin在A部落，end没有部落，A部落将end包进去扩张
            beginIn.push(tempEnd)

        } else if (beginIn == null && endIn != null) {
            //end在A部落，begin没有部落，A部落将begin包进去扩张
            endIn.push(tempBegin)
        } else if (beginIn != null && endIn != null && beginIn != endIn) {
            //begin在A部落，end在B部落，将A,B部落合并
            let allIn = beginIn.concat(endIn)
            let needRemove = resultList.indexOf(endIn)
            resultList.splice(needRemove, 1)
            needRemove = resultList.indexOf(beginIn)
            resultList.splice(needRemove, 1)
            resultList.push(allIn)
        }
        console.log(beginIn, endIn)
        tempBegin.neighbor.push(tempEnd)
        tempBegin.neighbor.push(tempBegin)


    }
}


function kruskal(pointSet, distance) {
    let resultList = [];//二维数组，表示有多少个部落

    while (true) {
        let minDis = max;
        let begin = null
        let end = null

        for (let i = 0; i < distance.length; i++) {
            for (let j = 0; j < distance[i].length; j++) {
                let tempBegin = pointSet[i]
                let tempEnd = pointSet[j]

                if (i != j && distance[i][j] < minDis && canLink(resultList, tempBegin, tempEnd)) {
                    minDis = distance[i][j]
                    begin = tempBegin
                    end = tempEnd
                }
            }
        }
        console.log("=====", resultList.length)
        console.log(resultList, begin, end)
        link(resultList, begin, end)
        if (resultList.length == 1 && resultList[0].length == pointSet.length) {
            break
        }
    }
}

kruskal(pointSet, distance)
console.log(pointSet)
 
