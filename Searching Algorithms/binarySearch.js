function binarySearch(arr, value) {
  let left = arr[0];
  let right = arr[arr.length - 1];
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    if (mid === value) {
      return arr.indexOf(value); // Value found
    } else {
      if (arr[mid] === value) {
        return mid;
      } else if (arr[mid] < value) {
        left = mid + 1;
        mid = Math.floor((left + right) / 2);
      } else {
        right = mid - 1;
        mid = Math.floor((left + right) / 2);
      }
    }
  }
  return -1; // Value not found
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const valueToFind = 6;
const index = binarySearch(arr, valueToFind);

const eg = binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  10
);

console.log(index);
console.log(eg);
