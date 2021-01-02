export class Sorting {
  /**
   * should sort a list of numbers with use of the bubble sort algorithm
   * @See: https://de.wikipedia.org/wiki/Bubblesort
   */
  public static bubbleSort<T>(array: T[]): T[] {
    // for (let i = 0; i < array.length; i++) {
    //   for (let j = 0; j < array.length - i - 1; j++) {
    //     if (array[j] > array[j + 1]) {
    //       const tmp = array[j];
    //       array[j] = array[j + 1];
    //       array[j + 1] = tmp;
    //     }
    //   }
    // }
    // return array;

    //shabby
    for (let n = array.length; n > 1; n--) {
      for (let i = 0; i < n - 1; i++) {
        if (array[i] > array[i + 1]) {
          Sorting.swap(array, i, i + 1);
        }
      }
    }
    return array;
  }
  //shabby
  private static swap<T>(arr: T[], idx: number, idx2: number) {
    const tmp = arr[idx];
    arr[idx] = arr[idx2];
    arr[idx2] = tmp;
  }
  /**
   * should sort a list of numbers with use of the selection sort algorithm
   * @See: https://de.wikipedia.org/wiki/Selectionsort
   */
  public static selectionSort<T>(array: T[]): T[] {
    let compareIndex = 0;
    while (compareIndex < array.length) {
      for (let searchIndex = compareIndex + 1; searchIndex < array.length; searchIndex++) {
        if (array[searchIndex] < array[compareIndex]) {
          [array[searchIndex], array[compareIndex]] = [array[compareIndex], array[searchIndex]];
        }
      }

      compareIndex++;

      // console.log(array);
    }

    return array;

    //shabby
    //  let smallestIndex = null;
    //  for (let n = 0; n < array.length; n++) {
    //    for (let i = n; i < array.length; i++) {
    //      if (!smallestIndex || array[i] < array[smallestIndex]) {
    //        smallestIndex = i;
    //      }
    //    }
    //    Sorting.swap(array, n, smallestIndex);
    //    smallestIndex = null;
    //  }
    //  return array;
  }

  /**
   * should sort a list of numbers with use of the insertion sort algorithm
   * @See: https://de.wikipedia.org/wiki/Insertionsort
   */
  public static insertionSort<T>(array: T[]): T[] {
    for (let i = 0; i < array.length; i++) {
      const toSort = array[i];
      let j = i;
      while (j > 0 && array[j - 1] > toSort) {
        array[j] = array[j - 1];
        j = j - 1;
      }
      array[j] = toSort;
    }
    return array;
  }

  /**
   * should sort a list of numbers with use of the quick sort algorithm
   * @See: https://de.wikipedia.org/wiki/Quicksort
   */
  public static quickSort<T>(array: T[]): T[] {
    throw new Error("Not yet implemented");
  }
}
