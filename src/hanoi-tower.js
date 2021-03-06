module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const solution = {};
    solution.turns = Math.pow(2, disksNumber) - 1;
    solution.seconds = Math.floor(solution.turns / (turnsSpeed / 3600));
    return solution;
}
