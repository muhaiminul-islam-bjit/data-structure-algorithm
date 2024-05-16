function mergeTwoArray(arr1, arr2) {

    let mergedArray = [];

    for (let i = 0; i < data.length; i++) {
        mergedArray[i] = arr1[i];
    }

    for (let j = 0; j < data2.length; j++) {
        mergedArray[data.length + j] = arr2[j];
    }

    return mergedArray;
}

const data = [3, 71, 34, 56, 90];
const data2 = [20, 30, 40, 50];

console.log(mergeTwoArray(data, data2));