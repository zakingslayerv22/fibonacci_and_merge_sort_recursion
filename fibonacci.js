function fibs(x) {
  const array = [];

  for (let i = 0; i <= x; i++) {
    if (i === 0) {
      array.push(0);
    } else if (i === 1) {
      array.push(1);
    } else {
      array.push(array[i - 1] + array[i - 2]);
    }
  }

  return array;
}

console.log(fibs(7));

function fibsRec(x) {
  console.log("This was printed recursively");

  if (x === 0) return [0];
  if (x === 1) return [0, 1];

  const returnedArray = fibsRec(x - 1);
  const nextNumber = returnedArray[x - 1] + returnedArray[x - 2];
  returnedArray.push(nextNumber);

  return returnedArray;
}

console.log(fibsRec(8));
