const binarySearch = <T extends Record<string, number | any>>(
  list: T[],
  target: number,
  accessor: string,
) => {
  let left = 0;
  let right = list.length - 1;
  let ans = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const item = list[mid];
    if (item[accessor] < target) {
      ans = mid;
      left = mid + 1;
    } else if (item[accessor] > target) {
      right = mid - 1;
    } else {
      right = mid - 1;
    }
  }
  return ans;
};

export { binarySearch };
