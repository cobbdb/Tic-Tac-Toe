var BoardProfile = function () {
    var map = new BoardMap();
    return {
        tiles: map,
        paths: [
            new Path([
                map[0][0],
                map[0][1],
                map[0][2]
            ]),
            new Path([
                map[1][0],
                map[1][1],
                map[1][2]
            ]),
            new Path([
                map[2][0],
                map[2][1],
                map[2][2]
            ]),
            new Path([
                map[0][0],
                map[1][0],
                map[2][0]
            ]),
            new Path([
                map[0][1],
                map[1][1],
                map[2][1]
            ]),
            new Path([
                map[0][2],
                map[1][2],
                map[2][2]
            ]),
            new Path([
                map[0][0],
                map[1][1],
                map[2][2]
            ]),
            new Path([
                map[2][0],
                map[1][1],
                map[0][2]
            ])
        ]
    };
};
