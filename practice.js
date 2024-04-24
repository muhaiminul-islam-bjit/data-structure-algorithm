function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);
  let lefArray = arr.slice(0, mid);
  let rightArray = arr.slice(mid);

  return merge(mergeSort(lefArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
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

const array = [6, 5, 12, 10, 9, 1];
console.log(mergeSort(array));
