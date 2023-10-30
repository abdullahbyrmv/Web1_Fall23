const images = ["../assets/images/pp.jpg", "https://picsum.photos/id/237/200/300.jpg", "image3.jpg"]; // Add your image URLs here
let currentImageIndex = 0;

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const galleryImage = document.getElementById("galleryImage");

function showImage(index) {
  galleryImage.src = images[index];
}

prevButton.addEventListener("click", function () {
  currentImageIndex--;
  showImage(currentImageIndex);

  if (currentImageIndex === 0) {
    prevButton.disabled = true;
  }
  nextButton.disabled = false;
});

nextButton.addEventListener("click", function () {
  currentImageIndex++;
  showImage(currentImageIndex);

  if (currentImageIndex === images.length - 1) {
    nextButton.disabled = true;
  }
  prevButton.disabled = false;
});

showImage(currentImageIndex);
