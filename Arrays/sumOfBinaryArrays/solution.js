const sumOfBinaryArr = (arr1, arr2) => {
  const arr = [];
  const len = arr1.length;
  let carryOver = 0;
  for(let i = len-1; i >=0; i--){
    const sum = arr1[i] + arr2[i] + carryOver;
    arr[i] = sum%2;
    carryOver = parseInt(sum/2);
  }
  arr.unshift(carryOver);
  return arr;
}