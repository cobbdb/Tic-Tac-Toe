var BoardMap = function () {
    var grid = [];
    for (var j = 0; j < 3; j += 1) {
        grid.push([]);
        for (var i = 0; i < 3; i += 1) {
            grid[i][j].push(new Tile(i, j));
        }
    }
    return grid;
};
