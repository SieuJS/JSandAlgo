function averagepair(arr,avg){
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        let sum = arr[left]+arr[right] ;
        if(sum> avg*2) right--;
        else if(sum < avg*2) left++;
        else return true;    
    }
    return false;
}

function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }

  //sliding Window
  function maxSubarraySum(arr, n){
    let left = 0;
    let right = 0;
    while(right < n){
        sum+=arr[right++];
    }
    while(right < arr.length){
        let edgeSum = arr[right] + arr[left];
        let nextSum = arr[right++] + arr[left++];
        if(edgeSum < nextSum){
            sum -= (edgeSum-nextSum);
        }
    }
    return sum;
  }
  /*
  12345678
  ,,,
   ,,,
  */

 // liner search
 function linearSearch(arr, a){
    for(let i = 0 ; i < arr.length; i ++){
        if(arr[i] === a) return i;
    }
    return -1
 }

// binary search 
function binarySearch(arr, a){
    let left = 0;
    let right = arr.length-1;

    while(left < right){
        let mid = (left + right+1) / 2;
        if(arr[mid]=== a) return mid;
        if(arr[mid] > a) right = mid;
        else left = mid;
    }
    return -1
}


