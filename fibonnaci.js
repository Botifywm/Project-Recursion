function fibs(n) {
  let array = [0, 1];
  while (array.length < n) {
    let newNum = array[array.length - 1] + array[array.length - 2];
    array.push(newNum);
  }
  return array;
}

function fibsRec(n, arr = [0, 1]) {
  if (n <= 2) {
    return arr.slice(0, n);
  } else {
    arr = fibsRec(n - 1, arr);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
}

console.log(fibs(8));
console.log(fibsRec(8));
