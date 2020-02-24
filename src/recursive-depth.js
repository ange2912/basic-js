module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 0, allDepths = []) {
        depth++;
        allDepths.push(depth);
    
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
            this.calculateDepth(arr[i], depth, allDepths)
            }
        }
        return Math.max(...allDepths);
      }
};