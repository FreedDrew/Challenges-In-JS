function GetSum(a, b) {
  let count = 0;
  if (a === b) {
    return a;
  } else if (a < b) {
    for (a; a <= b; a++) {
      count += a;
    }
  } else if (b < a) {
    for (b; b <= a; b++) {
      count += b;
    }
  }

  return count;

}
