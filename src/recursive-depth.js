const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let currentArr = arr;
        let counter = 0;
        let depth = 0;

        currentArr.forEach( element => {
            if( Array.isArray(element)) {
                counter = this.calculateDepth(element);
            }
            if (counter > depth) {
                depth = counter;
            }
        });
        return ++depth;
    }
};