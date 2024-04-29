function deleteElement(array, position) {
  for (let i = position; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array.length = array.length - 1;
  return array;
}

function deleteElementJsFunc(array, position) {
  array.splice(position, 1);

  return array;
}

const array = [10, 20, 30, 40, 50, 60];
console.log(deleteElementJsFunc(array, 0));
