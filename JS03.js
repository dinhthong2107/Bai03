<!DOCTYPE html>
<html>
<head>
  <title>Thay đổi màu chữ</title>
  <style>
    .red-text {
      color: red;
    }
  </style>
</head>
<body>
  <p id="my-paragraph">Đây là một đoạn văn.</p>
  <button onclick="thayDoiMauChu()">Nhấp để thay đổi màu chữ</button>

  <script>
    function thayDoiMauChu() {
      var paragraph = document.getElementById("my-paragraph");
      paragraph.classList.add("red-text");
    }
  </script>
</body>
</html>
