function deleteItem(array, item) {
  const index = array.indexOf(item);
  array.splice(index, 1);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
deleteItem(array, 3);
console.log(array);
