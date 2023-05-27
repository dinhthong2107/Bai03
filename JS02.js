function timGiaTriLonNhat(arr) {
  let max = arr[0]; // Gán max ban đầu là phần tử đầu tiên trong mảng

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
console.log(timGiaTriLonNhat([1, 3, 5, 2, 4])); // Output: 5
console.log(timGiaTriLonNhat([10, 7, 21, 15, 9])); // Output: 21
console.log(timGiaTriLonNhat([-1, -5, -3, -2, -4])); // Output: -1
