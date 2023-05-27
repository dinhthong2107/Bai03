<!DOCTYPE html>
<html>
<head>
  <title>Chuyển đổi sự hiển thị</title>
</head>
<body>
  <p id="my-paragraph">Đây là một đoạn văn.</p>
  <button onclick="chuyenDoiHienThi()">Nhấp để chuyển đổi sự hiển thị</button>

  <script>
    function chuyenDoiHienThi() {
      var paragraph = document.getElementById("my-paragraph");
      if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
      } else {
        paragraph.style.display = "none";
      }
    }
  </script>
</body>
</html>
