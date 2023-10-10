const merge = (arr1, arr2) => {
    let l1 = 0;
    let l2 = 0;
    let r1 = arr1.length;
    let r2 = arr2.length;
    const result = [];
    while (l1 < r1 && l2 < r2) {
        if (arr1[l1] < arr2[l2]) {
            result.push(arr1[l1++]);
        } else {
            result.push(arr2[l2++]);
        }
    }
    while (l1 < r1) {
        result.push(arr1[l1++]);
    }
    while (l2 < r2) {
        result.push(arr2[l2++]);
    }
    return result;
}

const mergeSort = (arr, l, r) => {
    if (l === r) return [arr[l]]; // Return an array with a single element when the range is one element
    let m = Math.floor((l + r) / 2);
    let left = mergeSort(arr, l, m);
    let right = mergeSort(arr, m + 1, r);
    return merge(left, right);
}

const testArr = [1, 2, 5, 45, 100];
const testArr2 = [2, 6, 7, 97, 123, 343, 654];
const testArr3 = [5, 6, 1, 2, 123, 9, 123, 1];

console.log(mergeSort(testArr3, 0, testArr3.length - 1));
