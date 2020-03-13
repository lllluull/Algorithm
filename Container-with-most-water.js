/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let leftPos = 0;
    let rightPos = height.length - 1
    while (leftPos < rightPos) {
      const area = (rightPos - leftPos) * Math.min(height[rightPos], height[leftPos])
      max = Math.max(area, max)
      if(height[leftPos] > height[rightPos]) {
        rightPos --
      } else {
        leftPos ++
      }
    }
    return max
  };