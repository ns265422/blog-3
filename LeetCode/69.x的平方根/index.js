/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  return +Math.sqrt(x).toString().split('.')[0]
};