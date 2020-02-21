module.exports = function countCats(matrix) {
    let cats_qt = 0;
    matrix.forEach(i => {
      i.forEach(j => {
        if(j === "^^") cats_qt++;
      })
    })
    return cats_qt;
};
