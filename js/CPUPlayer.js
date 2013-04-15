var CPUPlayer = function () {
    var player = new Player();
    player.icon = 'icon-repeat';
    player.update = function () {
        var quickProfile = new QuickProfile();
        var move = quickProfile.nextMove();
        if (move) {
            // Forced to block or win.
            return;
        }
        
        var friendProfile = new FriendProfile();
        var blockProfile = new BlockProfile();
        var weightProfile = new WeightProfile(friendProfile, blockProfile);
        
        var bestMoves = weightProfile.getMax();
        return bestMoves.randomPick();
    };
    return player;
};
