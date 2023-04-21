var backToTopBtn = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", function () {
    window.scrollTo(0, 0);
});
