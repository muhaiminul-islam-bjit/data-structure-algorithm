function cartesianProduct(setA, setB) {
  const cartesian = [];
  for (let i = 0; i < setA.length; i++) {
    for (let j = 0; j < setB.length; j++) {
      cartesian.push([setA[i], setB[j]]);
    }
  }
  return cartesian;
}
const setA = [1, 2];
const setB = [3, 4, 5];
console.log(cartesianProduct(setA, setB));
