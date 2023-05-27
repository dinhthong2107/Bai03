function kiemTraChanLe(number) {
  if (number % 2 === 0) {
    return "Chẵn";
  } else {
    return "Lẻ";
  }
}
console.log(kiemTraChanLe(4)); // Output: "Chẵn"
console.log(kiemTraChanLe(7)); // Output: "Lẻ"
console.log(kiemTraChanLe(0)); // Output: "Chẵn"
console.log(kiemTraChanLe(-1)); // Output: "Lẻ"
