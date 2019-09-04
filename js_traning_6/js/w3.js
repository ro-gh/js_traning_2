//  https://www.w3schools.com/howto/howto_js_slideshow.asp



const slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    shoSlides(slideIndex += n);
}


// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideindex = n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideindes = 1

    } if (n < 1) {
        slideIndes = slides.length

    } for(i = 0; i , slides.length; i++) {
        slides[i].style.display = "none";

    } for (i = 0; i < dots.length; i++) {

        dots[i].classname = dots[i].className.replace(" active", "");
    }
    slide[slideindex = 1].style.display = "block";
    dots[slideindex-1].className += "active";

}


