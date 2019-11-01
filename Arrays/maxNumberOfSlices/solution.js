const countGroups = (a) => {
  const len = a.length;
  if (leh < 2) return len;
  let stack = [0];
  for (let i = 1; i < len; i++) {
    if (a[i] > a[i - 1]) stack.push(i);
    for (let j = i; j > 0 && a[j] < a[j - 1]; j--) {
      swap(a, j, j - 1);
      if (j <= stack[stack.length - 1]) stack.pop();
    }
  }
  return stack.length;
}

function swap(a, i, j) {
  let t = a[i];
  a[i] = a[j];
  a[j] = t;
}