module.exports = function repeater(str, options) {
    const optionsArr = options;
    let resultStr = '';
    
    if (!optionsArr['repeatTimes']) {
        optionsArr['repeatTimes'] = 1;
    }

    if (optionsArr['additionRepeatTimes'] === undefined) {
        optionsArr['additionRepeatTimes'] = 1;
    }

    if (optionsArr['addition'] === undefined) {
        optionsArr['addition'] = '';
    }

    for (let i = 0; i < optionsArr['repeatTimes']; i++) {
        resultStr += String(str);

        for (let k = 0; k < optionsArr['additionRepeatTimes']; k++) {
            resultStr += String(optionsArr['addition']);

            if (k < optionsArr['additionRepeatTimes'] - 1) {
                if (optionsArr['additionSeparator']) {
                    resultStr += String(optionsArr['additionSeparator']);
                } else {
                    resultStr += '|';
                }
            }
        }

        if (i < optionsArr['repeatTimes'] - 1) {
            if (optionsArr['separator']) {
                resultStr += String(optionsArr['separator']);
            } else {
                resultStr += '+';
            }
        }
    }
    
    return resultStr;
};
  