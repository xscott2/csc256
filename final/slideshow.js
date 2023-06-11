//creates function pop up window on page load
window.addEventListener("load", function(){
  //set time out if desired
  setTimeout(
      function open(event){
          //select document
          document.querySelector(".popup").style.display = "block";
      },
      1000
  )
});
//create on click functionality
document.getElementById("close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
});
function closeWin(){

  document.querySelector(".popup").style.display = "none";

  return false;}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// create slide function with manual rotation
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}