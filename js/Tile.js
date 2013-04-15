var Tile = function (x, y) {
    return {
        type: Tile.type.NONE,
        weight: 0,
        friendWeight: 0,
        blockWeight: 0,
        location: new Location(x, y),
        isFree: function () {
            return (this.type == Tile.type.NONE);
        }
    };
};
Tile.type = {
    X: -1,
    O: 1,
    NONE: 0
};
