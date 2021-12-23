const backTopBtn = document.querySelector("#topBtn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 270) {  //Show backTopBtn
        backTopBtn.style.display = "block";
    }
    else { //Hide backTopBtn
        backTopBtn.style.display = "none";
    }
}

backTopBtn.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo(0, 0);
}