module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    }

    const transformedArray = [];
    let memory;

    arr.forEach((item, index, array) => {
        switch (item) {
            case '--discard-next':
                memory = index + 1;
                break;
            case '--discard-prev':
                if (array[index - 2] === '--discard-next') {
                    break;
                }
                transformedArray.pop();
                break;
            case '--double-prev':  
                const length = transformedArray.length;  

                if (!length || array[index - 2] === '--discard-next') {
                    break;
                }

                transformedArray.push(array[index - 1]);
                break;
            case '--double-next':
                if (index + 1 > array.length - 1) {
                    break;
                }
                transformedArray.push(array[index + 1]);
                break;
            default:
                transformedArray.push(item);
                break;
        }

        if (memory === index) {
            transformedArray.pop();
            memory = null;
        }
    });

    return transformedArray;
};
