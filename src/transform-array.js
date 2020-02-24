module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error('error');
    if (arr.length < 1) return [];

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case '--discard-next':
          i++;
          break;
        case '--discard-prev':
          newArr.length > 0 ? newArr.pop() : null;
          break;
        case '--double-next':
          i+1 < arr.length  ? newArr.push(arr[i + 1]) : null;
          break;
        case '--double-prev':
          i > 0 ? newArr.push(arr[i - 1]) : null;
          break;
        default:
          newArr.push(arr[i]);
      }
    }
    return newArr;
};
