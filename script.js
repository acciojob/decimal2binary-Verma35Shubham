function threeSum(arr, target) {
  const triplets = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    if (i === 0 || (i > 0 && arr[i] !== arr[i - 1])) {
      let lo = i + 1;
      let hi = arr.length - 1;
      let sum = target - arr[i];
      while (lo < hi) {
        if (arr[lo] + arr[hi] === sum) {
          triplets.push([arr[i], arr[lo], arr[hi]]);
          while (lo < hi && arr[lo] === arr[lo + 1]) lo++;
          while (lo < hi && arr[hi] === arr[hi - 1]) hi--;
          lo++;
          hi--;
        } else if (arr[lo] + arr[hi] < sum) {
          lo++;
        } else {
          hi--;
        }
      }
    }
  }
  return triplets;
}

module.exports = threeSum;
