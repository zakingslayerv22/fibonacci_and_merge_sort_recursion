function mergeSort(array) {
  let copy;
  copy = copy || array.slice();

  if (copy.length < 2) return copy;

  const splitFromHere = Math.round(copy.length / 2);

  const leftPart = copy.splice(0, splitFromHere);
  const rightPart = copy.slice(0, splitFromHere);

  const sortedleft = mergeSort(leftPart);
  const sortedRight = mergeSort(rightPart);

  const finalArray = merge(sortedleft, sortedRight);

  return finalArray;
}

console.log(mergeSort([105, 79, 100, 110]));

function merge(leftArray, rightArray) {
  const results = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      results.push(leftArray.shift());
    } else {
      results.push(rightArray.shift());
    }
  }

  return [...results, ...leftArray, ...rightArray];
}
