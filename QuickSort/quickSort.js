const swap = ( arr , i , j ) {
    let temp = arr[i];
    arr [i] = arr[j];
    arr[j] = temp;
    return arr;
}

const quickSort = (arr, l , r) => {
    let pivot = arr[l];
    let numOfLessThan = 0;
    let i = l + 1;
    while( i < r ) {
        if (arr[i] > pivot ){
            numOfLessThan ++;
            arr = swap(arr, l + numOfLessThan, i);
        }
        i++;
    }
}

