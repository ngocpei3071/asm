function validateForm() {
    var name = document.getElementById("name").value;
    var studentId = document.getElementById("studentId").value;
    var email = document.getElementById("email").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var preferences = document.querySelectorAll('input[name="preferences"]:checked');
    var nationality = document.getElementById("nationality").value;
    var note = document.getElementById("note").value;

    var isValid = true;
    // Kiểm tra trường mã số sinh viên
    if (studentId === "") {
      document.getElementById("studentId").classList.add("error");
      alert("Mã số sinh viên của bạn bao nhiêu?");
      isValid = false;
    } else {
      document.getElementById("studentId").classList.remove("error");
    }

    // Kiểm tra trường tên
    if (name === "") {
      document.getElementById("name").classList.add("error");
      alert("Quên điền tên này!");
      isValid = false;
    } else {
      document.getElementById("name").classList.remove("error");
    }

    

    // Kiểm tra trường email
    if (email === "") {
      document.getElementById("email").classList.add("error");
      isValid = false;
    } else if (!validateEmail(email)) {
      document.getElementById("email").classList.add("error");
      alert("Vui lòng nhập đúng định dạng email!");
      isValid = false;
    } else {
      document.getElementById("email").classList.remove("error");
    }

    // Kiểm tra trường giới tính
    if (!gender) {
      document.getElementById("genderError").classList.add("error");
      alert("Giới tính bạn là gì?");
      isValid = false;
    } else {
      document.getElementById("genderError").classList.remove("error");
    }

    // Kiểm tra trường sở thích
    if (preferences.length === 0) {
      document.getElementById("preferencesError").classList.add("error");
      alert("Chưa chọn sở thích nha!");
      isValid = false;
    } else {
      document.getElementById("preferencesError").classList.remove("error");
    }

    // Kiểm tra trường quốc tịch
    if (nationality === "") {
      document.getElementById("nationality").classList.add("error");
      alert("Quốc tịch còn trống!");
      isValid = false;
    } else {
      document.getElementById("nationality").classList.remove("error");
    }

    // Kiểm tra trường ghi chú
    if (wordCount(note) > 200) {
      document.getElementById("note").classList.add("error");
      alert("Ghi chú không được vượt quá 200 từ!");
      isValid = false;
    } else {
      document.getElementById("note").classList.remove("error");
    }

    return isValid;
  }

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function wordCount(text) {
    var words = text.trim().split(/\s+/);
    return words.length;
  }