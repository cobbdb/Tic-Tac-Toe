var Board = new function () {
    var grid = new BoardMap();
    return {
        moveIsValid: function (location) {
            return grid[location.x][location.y].isFree();
        },
        update: function () {
            return;
        }
    };
};
