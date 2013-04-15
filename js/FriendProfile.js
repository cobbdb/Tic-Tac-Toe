var FriendProfile = function () {
    var profile = new BoardProfile();
    profile.update = function () {
        for (var path in profile.paths) {
            if (path.weight == My.symbol) {
                path.each(function (tile) {
                    if (tile.isFree()) {
                        tile.friendWeight += 1;
                    }
                });
            }
        }
    };
    return profile;
};
