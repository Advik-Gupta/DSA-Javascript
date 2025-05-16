const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minValue = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValue]) {
        minValue = j;
      }
    }
    if (i !== minValue) {
      swap(arr, i, minValue);
      console.log(arr);
    }
  }

  return arr;
}

selectionSort([37, 45, 29, 8]);
console.log("Second example");
selectionSort([0, 1, 37, 45, 29, 8]);
