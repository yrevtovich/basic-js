module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    }
    let transformableArray = arr;
    let transformedArray = [];
    for (let i = 0; i < transformableArray.length; i++) {
        if ( transformableArray[i] === '--discard-prev') {
            if (transformedArray.length > 0 ) {
                transformedArray.splice(transformedArray.length - 1, 1);
            }
        } else if (transformableArray[i] === '--double-next') {
            if (i + 1 < transformableArray.length) {
                transformedArray.push(transformableArray[i + 1]);
            }
        } else if (transformableArray[i] === '--double-prev') {
            if ( i > 0) {
                transformedArray.push(transformableArray[i - 1]);
            }
        } else if ( transformableArray[i] !== '--discard-prev' && transformableArray[i] !== '--discard-next' && transformableArray[i] !== '--double-next' && transformableArray[i] !== '--double-prev' && transformableArray[i - 1] !== '--discard-next') {
            transformedArray.push(transformableArray[i]);
        }
    }
    return transformedArray;
};
