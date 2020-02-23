module.exports = function repeater(str, { repeatTimes = 1, separator = '+' , addition, additionRepeatTimes = 1, additionSeparator = '+'}) {
    const fillRepeatArray = (value, length) => {
        const arr = [];
        for (let index = 0; index < length; index++) {
            arr.push(String(value));
        }
        return arr;
    }

    if (addition !== undefined) {
        const additionStr = fillRepeatArray(addition, additionRepeatTimes).join(additionSeparator);
        str += additionStr;
    } 
    return fillRepeatArray(str, repeatTimes).join(separator);
};