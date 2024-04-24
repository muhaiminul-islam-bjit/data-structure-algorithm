function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  const sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }
  return sortedArray
    .concat(leftArray.slice(leftIndex))
    .concat(rightArray.slice(rightIndex));
}

function mergeOptimize(leftArray, rightArray) {
  let sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftArray.length > leftIndex && rightArray.length > rightIndex) {
    if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      sortedArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  return sortedArray
    .concat(leftArray.slice(leftIndex))
    .concat(rightArray.slice(rightIndex));
}

const array = [6, 4, 5, 3, 1, 2];
console.log(mergeSort(array));
