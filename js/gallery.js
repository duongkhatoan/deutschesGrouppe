// 3s gallery about us page
var images = document.querySelectorAll(".ourValue .boxRight .listGallery img");
var currentImage = 0;

function changeImage() {
  images[currentImage].classList.remove("active");

  currentImage = (currentImage + 1) % images.length;

  images[currentImage].classList.add("active");
}

setInterval(changeImage, 3000);
