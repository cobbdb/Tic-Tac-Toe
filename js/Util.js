Array.prototype.randomPick = function () {
    return this[_.random(this.length - 1)];
};
