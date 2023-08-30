<html lang="en">
    <head>
        <meta charset="UTF-8" />

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
        <link href="style.css" rel="stylesheet" />
        <title>Đăng ký thành viên</title>
    </head>
    <body>
    <div class="header">
                    <h1>QUẦN ÁO LOCAL BRAND</h1>
          <p>Easy wear - Easy care - Easy wear</p>
      </div>
      <div class="topnav">
          <a href="index.html">Trang chủ</a>
          <a href="#">ÁO</a>
          <a href="#">QUẦN</a>
          <a href="#">ĐỒ HỌA TIẾT</a>
          <a href="#" style="float: right">Đăng nhập</a>
      </div>
  
        <div class="header" >
            <h2>ĐĂNG KÝ THÀNH VIÊN</h2>
        </div>
  <script src="JavaScript/Dangkythanhvien.js"></script>
</head>
<body>

  <form  method="post" action="Dangkythanhvien.php">

    <label for="name">Tên đăng ký</label><br>
    <input type="text" id="name" name="name"><br>

    <label for="email">Email:</label><br>
    <input type="text" id="email" name="email"><br>

    <label for="mk">Mật khẩu</label><br>
    <input type="text" id="mk" name="mk"><br>

    <label for="address">Địa chỉ:</label><br>
    <input type="text" id="address" name="address"><br>
    
    <div class="form-row">
        <label for="gender">Giới tính:</label>
        <input type="radio" id="male" name="gender" value="male">
            <label for="male">Nam</label>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Nữ</label><br>
            <div id="genderError" class="error"></div>
    </div>

    <label for="note">Ghi chú:</label><br>
    <textarea id="note" name="note" rows="4" ></textarea><br>

    <input type="submit" name="register" value="Đăng ký">
  </form>

  <?php
        if (isset($_POST['register'])) {
            $name = $_POST['name'];
            $email = $_POST['email'];
            $mk = $_POST['mk'];
            $address = $_POST['address'];
            $gender = $_POST['gender'];
            $note = $_POST['note'];
            include "connect.php";
            $sql = "INSERT INTO account(name, email, mk, address, gender, note, id)
            VALUES ('$name', '$email', '$mk', '$address', '$gender', '$note', NULL)";
            $result = mysqli_query($conn, $sql);

            if (!$result) {
                $registrationSuccess = false;
            } else {
                $registrationSuccess = true;
                
            }
        }
    
    ?>
    
    <script>
        <?php if (isset($registrationSuccess) && $registrationSuccess) { ?>
            alert("Đăng ký thành công!");
        <?php } ?>
        <?php if (isset($registrationSuccess) && $registrationSuccess === false) { ?>
            alert("Đăng ký không thành công!");
        <?php } ?>
    </script>


</body>
</html>