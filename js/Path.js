var Path = function (tileList) {
    return {
        tiles: tileList,
        weight: 0,
        reset: function () {
            this.weight = 0;
            _.each(tileList, function (tile) {
                tile.weight = 0;
                tile.friendWeight = 0;
                tile.blockWeight = 0;
            });
        },
        reduce: function (iterator) {
            return _.reduce(tileList, iterator, 0);
        },
        find: function (iterator) {
            return _.find(tileList, iterator);
        },
        each: function (iterator) {
            _.each(tileList, iterator);
        }
    };
};
