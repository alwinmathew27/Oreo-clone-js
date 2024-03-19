// navbar dropdown script
document.addEventListener("DOMContentLoaded", function () {
  const giftIcon = document.getElementById("shopicon");
  const dropdownContent = giftIcon.querySelector(".dropdown-content");

  // Show dropdown on mouseover
  giftIcon.addEventListener("mouseover", function () {
    dropdownContent.style.display = "block";
  });

  // Hide dropdown on mouseout
  giftIcon.addEventListener("mouseout", function () {
    dropdownContent.style.display = "none";
  });
});

// gift icon dropdown script
document.addEventListener("DOMContentLoaded", function () {
  const giftIcon = document.getElementById("gifticon");
  const dropdownContent = giftIcon.querySelector(".gifticon_dropdown");

  // Show dropdown on mouseover
  giftIcon.addEventListener("mouseover", function () {
    dropdownContent.style.display = "block";
  });

  // Hide dropdown on mouseout
  giftIcon.addEventListener("mouseout", function () {
    dropdownContent.style.display = "none";
  });
});

// business icon dropdown script
document.addEventListener("DOMContentLoaded", function () {
  const giftIcon = document.getElementById("businessicon");
  const dropdownContent = giftIcon.querySelector(".businessicon_dropdown");

  // Show dropdown on mouseover
  giftIcon.addEventListener("mouseover", function () {
    dropdownContent.style.display = "block";
  });

  // Hide dropdown on mouseout
  giftIcon.addEventListener("mouseout", function () {
    dropdownContent.style.display = "none";
  });
});

// about icon dropdown script
document.addEventListener("DOMContentLoaded", function () {
  const giftIcon = document.getElementById("abouticon");
  const dropdownContent = giftIcon.querySelector(".abouticon_dropdown");

  // Show dropdown on mouseover
  giftIcon.addEventListener("mouseover", function () {
    dropdownContent.style.display = "block";
  });

  // Hide dropdown on mouseout
  giftIcon.addEventListener("mouseout", function () {
    dropdownContent.style.display = "none";
  });
});
// ----------------------------slider section ----------------------------------
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// cake slider ----------------------------------------------
const productContainers = document.querySelectorAll(".product-container");
const nxtBtn = document.querySelectorAll(".nxt-btn");
const preBtn = document.querySelectorAll(".pre-btn");

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
