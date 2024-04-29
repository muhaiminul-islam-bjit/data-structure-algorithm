function insertArray(arr, position, el) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i >= position) {
      arr[i + 1] = arr[i];
      if (i === position) {
        arr[i] = el;
      }
    }
  }

  return arr;
}

function insertArrayWithJsFunc(arr, position, el) {
  arr.splice(position, 0, el);
  return arr;
}

const array = [60, 30, 10, 67, 40];
console.log(insertArray(array, 2, 70));
console.log(insertArrayWithJsFunc(array, 2, 90));
