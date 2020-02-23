module.exports = function countCats(matrix) {
  const cat = '^^';
  return matrix.reduce((acu, cur) => {
    acu += cur.filter(value => value === cat).length;
    return acu;
  }, 0)
};
