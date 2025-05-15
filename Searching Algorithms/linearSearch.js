function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const valueToFind = 3;
const index = linearSearch(arr, valueToFind);

console.log(index);
