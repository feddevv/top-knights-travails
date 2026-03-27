function findPossibleMoves(point) {
    const [x, y] = point
    const moves = [
        [x + 2, y + 1],
        [x + 2, y - 1],
        [x - 2, y - 1],
        [x - 2, y + 1],
        [x + 1, y + 2],
        [x - 1, y + 2],
        [x - 1, y - 2],
        [x + 1, y - 2]
    ]

    const possibleMoves = moves.filter(move => {
        const [x, y] = move
        if ((x >= 0 && x <= 7) && (y >= 0 && y <= 8)) return move
    })

    return possibleMoves
}

function knightMoves(pointA, pointB) {
    const q = [{point: pointA, distance: [pointA]}]
    const visited = new Set([`${pointA[0]},${pointA[1]}`])

    while(q.length > 0) {
        const {point, distance} = q.shift()
        
        visited.add(`${point[0]},${point[1]}`)
        if (point[0] === pointB[0] && point[1] === pointB[1]) {
            return distance
        }

        for (const neighbor of findPossibleMoves(point)) {
            if (!visited.has(`${neighbor[0]},${neighbor[1]}`)) {
                q.push({point: neighbor, distance: [...distance, neighbor]})
            }
        }
    }
}

console.log(knightMoves([0,0],[7,7]))