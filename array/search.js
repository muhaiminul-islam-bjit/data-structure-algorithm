function search(array, data) {
  let index;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === data) {
      index = i;
      break;
    }
  }
  return index;
}

function searchJSFunc(array, data){
    return array.indexOf(data);
}

const array = [20, 40, 60, 5, 10, 70, 80, 90];
console.log(searchJSFunc(array, 10));


