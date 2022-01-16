
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0 || matrix.length === 0){
    return [];
  }
  let result = [];
  matrix.forEach(element => {
    if (matrix.indexOf(element) % 2 === 0){
      element.forEach(item => {
        result.push(item);
      })
    }
    else {
      element.reverse();
      element.forEach(item => {
        result.push(item);
      })
    }
  });
  return result;
}
