var QuickProfile = function () {
    var profile = new BoardProfile();
    profile.nextMove = function () {
        var getFreeTile = function (path) {
            return path.find(function (tile) {
                return tile.isFree();
            });
        };
        var blocks = [];
        for (var path in profile.paths) {
            var weight = path.reduce(function (memo, tile) {
                return memo + tile.weight;
            });
            if (weight > 1) {
                // Take the win if available.
                return getFreeTile(path);
            } else if (weight < 1) {
                // Remember blocks for after all paths have been evaluated.
                var move = getFreeTile(path);
                blocks.push(move);
            }
        }
        if (blocks.length) {
            return blocks.randomPick();
        }
        return null;
    };
    return profile;
};
