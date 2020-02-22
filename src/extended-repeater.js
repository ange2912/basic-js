module.exports = function repeater(str, options) {
  let elements = [];
  let { repeatTimes = 1, separator = "+", addition, additionRepeatTimes = 1, additionSeparator = "|" } = options;

  for (let i = 0; i < repeatTimes; i++) {
    elements.push(`${str}`);
    for (let j = 0; j < additionRepeatTimes; j++) {
      if (addition !== undefined) elements.push(`${addition}`);
      if (j + 1 < additionRepeatTimes) {
        elements.push(additionSeparator);
      }
    }
    if (i + 1 < repeatTimes) elements.push(separator);
  }
  return elements.join('')
};
  