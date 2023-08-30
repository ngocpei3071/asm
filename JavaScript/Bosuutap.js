
    var slideIndex = 1;
    var totalSlides = 0;
    var imageCounter = document.getElementById("imageCounter");

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByTagName("img");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";

        // Cập nhật số ảnh hiện tại
        imageCounter.textContent = "Ảnh " + slideIndex + "/" + slides.length;
    }

    // Tính tổng số ảnh
    totalSlides = document.getElementsByTagName("img").length;
            