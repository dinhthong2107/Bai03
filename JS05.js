class TaiKhoanNganHang {
  constructor() {
    this.soDu = 0;
  }

  guiTien(amount) {
    if (amount > 0) {
      this.soDu += amount;
      console.log(`Đã gửi thành công ${amount} đồng.`);
    } else {
      console.log("Số tiền gửi không hợp lệ.");
    }
  }

  rutTien(amount) {
    if (amount > 0 && amount <= this.soDu) {
      this.soDu -= amount;
      console.log(`Đã rút thành công ${amount} đồng.`);
    } else {
      console.log("Số tiền rút không hợp lệ hoặc không đủ số dư.");
    }
  }

  kiemTraSoDu() {
    console.log(`Số dư hiện tại trong tài khoản là ${this.soDu} đồng.`);
  }
}
const taiKhoan = new TaiKhoanNganHang();

taiKhoan.kiemTraSoDu(); // Output: Số dư hiện tại trong tài khoản là 0 đồng.

taiKhoan.guiTien(1000); // Output: Đã gửi thành công 1000 đồng.
taiKhoan.kiemTraSoDu(); // Output: Số dư hiện tại trong tài khoản là 1000 đồng.

taiKhoan.rutTien(500); // Output: Đã rút thành công 500 đồng.
taiKhoan.kiemTraSoDu(); // Output: Số dư hiện tại trong tài khoản là 500 đồng.
