const getArr = (U, L, arr) => {
  let upperSum = 0;
  let lowerSum = 0;
  const upperArr = [];
  const lowerArr = [];
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    switch (arr[i]) {
      case (0):
        upperArr.push(0);
        lowerArr.push(0);
        break;
      case (2):
        if (upperSum < U && lowerSum < L) {
          upperArr.push(1);
          lowerArr.push(1);
          upperSum += 1;
          lowerSum += 1;
        } else {
          return 'IMPOSSIBLE';
        }
        break;
      case (1):
        if (upperSum < U) {
          upperArr.push(1);
          lowerArr.push(0);
          upperSum += 1;
        } else if (lowerSum < L) {
          upperArr.push(0);
          lowerArr.push(1);
          lowerSum += 1;
        } else {
          return 'IMPOSSIBLE';
        }
        default:
    }
  }

  if (upperSum == U && lowerSum == L)
    return `${upperArr.join()}, ${lowerArr.join()}`;
  return 'IMPOSSIBLE';
}