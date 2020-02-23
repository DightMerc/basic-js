module.exports = function transform(arr) {
    if(!Array.isArray(arr)) throw 'arr is not an Array';
    const transformKeys = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
    
    const transformArray = [];
    for (let index = 0; index < arr.length; index++) {
        switch (arr[index]) {
            case transformKeys[0]:
                index += 1;
                break;
            case transformKeys[1]:
                transformArray.pop();
                break;
            case transformKeys[2]:
                if (arr.length > index + 1 && !transformKeys.includes(arr[index + 1])) {
                    transformArray.push(arr[index + 1]);
                }
                break;
            case transformKeys[3]:
                if (index - 1 >= 0 && !transformKeys.includes(arr[index - 1])) {
                    transformArray.push(arr[index - 1]);
                }
                break;
            default:
                transformArray.push(arr[index])
                break;
        }   
    }
    return transformArray;
};
