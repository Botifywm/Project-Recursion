function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const arrLenHalved = Math.round(array.length / 2);
    //   subtract one to account that index starts at 0
    let left = array.slice(0, arrLenHalved);
    let right = array.slice(arrLenHalved);

    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
  }
}

function merge(arr1, arr2) {
  let arr = [];
  let len = arr1.length + arr2.length;
  let i = 0;
  let j = 0;

  while (arr.length !== len) {
    if (arr1[i] <= arr2[j]) {
      arr.push(arr1[i]);
      if (i === arr1.length - 1) {
        arr = arr.concat(arr2.slice(j));
        return arr;
      }
      i++;
    } else {
      arr.push(arr2[j]);
      if (j === arr2.length - 1) {
        arr = arr.concat(arr1.slice(i));
        return arr;
      }
      j++;
    }
  }
}

let array = [3, 2, 1, 13, 8, 5, 0, 1];
console.log(mergeSort(array));

let array2 = [105, 79, 100, 110];
console.log(mergeSort(array2));
