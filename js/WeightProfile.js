var WeightProfile = function (friend, block) {
    var map = new BoardMap();
    for (var j in map) {
        for (var i in map[j]) {
            map[i][j].weight = friend[i][j].weight + block[i][j].weight;
        }
    }
    var list = _.flatten(map);
    var maxWeight = _.max(list, function (tile) {
        return tile.weight;
    });
    return {
        tiles: map,
        getMax: function () {
            return _.filter(list, function (tile) {
                return tile.weight >= maxWeight;
            });
        }
    };
};
