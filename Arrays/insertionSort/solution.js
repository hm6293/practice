const insertionSort = (arr) => {
  const len = arr.length;
  for(let i = 1; i < len; i++) {
    for(let j = i-1; j >= 0; j--){
      if(arr[j] > arr[j+1]) {
        arr[j] = arr[j] + arr[j+1];
        arr[j+1] = arr[j] - arr[j+1];
        arr[j] = arr[j] - arr[j+1];
      } else {
        break;
      }
      console.log(arr);
    }
  }
  return arr;
}