import { binarySearch } from "./binarySearch";

const calcStartIndex = (pivotIndex: number, noOfItems: number) =>
  pivotIndex - noOfItems / 2 + 1;
const calcEndIndex = (pivotIndex: number, noOfItems: number) =>
  pivotIndex + noOfItems / 2 + 1;

const getObjArraySlice = <T extends Record<string, number | any>>(
  list: T[],
  noOfItems: number,
  accessor: string,
  pivot: number,
) => {
  const sortedList = [...list].sort((a, b) => a[accessor] - b[accessor]);

  // Now we make sure we have the pivot
  const pivotIndex = binarySearch<T>(sortedList, pivot, "strike");
  // rn every value behind this pivot index is smaller than 214.29 and the pivot itself is also smaller than 214.29

  const isInLimit = calcStartIndex(pivotIndex, noOfItems) >= 0;
  const startIndex = isInLimit ? calcStartIndex(pivotIndex, noOfItems) : 0;
  const endIndex = isInLimit ? calcEndIndex(pivotIndex, noOfItems) : noOfItems;

  return sortedList.slice(startIndex, endIndex);
};

export { getObjArraySlice };
