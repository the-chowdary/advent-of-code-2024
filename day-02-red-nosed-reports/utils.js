export function isStrictlyIncreasingOrDecreasing(arr) {
  let isIncreasing = null;
  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1];

    if (diff === 0) {
      return false; // neither increasing or decreasing
    }

    if (Math.abs(diff) > 3) {
      return false;
    }
    if (diff > 0) {
      if (isIncreasing === false) {
        return false; // switching from decreasing to increasing not valid
      }
      isIncreasing = true;
    } else if (diff < 0) {
      if (isIncreasing === true) {
        return false; // switch from increasing to decreasing not valid
      }
      isIncreasing = false;
    }
  }
  return true;
}

// Remove element and verify
export function fixSequence(arr) {
  for (let i = 1; i < arr.length; i++) {
    const newArr = arr.slice(0, i).concat(arr.slice(i + 1));
    if (isStrictlyIncreasingOrDecreasing(newArr)) { return true; }

    const newArr2 = arr.slice(0, i - 1).concat(arr.slice(i));
    if (isStrictlyIncreasingOrDecreasing(newArr2)) { return true; }
  }
  return false;
}
