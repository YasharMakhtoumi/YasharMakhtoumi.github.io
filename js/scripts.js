// Back-to-Top Button
const backToTopButton = document.getElementById("backToTop");

// Hide button initially
backToTopButton.style.display = "none";

// Show button when scrolling down
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Smooth scroll to top
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});






document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "Photos/beach.jpg",
        "Photos/drone.JPG" ,
        "Photos/DSC02371_1.JPG" ,
        "Photos/photo_2025-02-02_17-29-24.jpg" ,
        "Photos/photo_2025-02-02_17-29-30.jpg" ,
        "Photos/photo_2025-02-02_17-29-33.jpg" ,
       

    ];

    let currentIndex = 0;
    const galleryImg = document.getElementById("gallery-img");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    function changeImage(direction) {
        galleryImg.style.opacity = 0; // Fade-out effect

        setTimeout(() => {
            currentIndex = (currentIndex + direction + images.length) % images.length; // Correctly handle prev/next
            galleryImg.src = images[currentIndex];
            galleryImg.style.opacity = 1; // Fade-in effect
        }, 300);
    }

    prevBtn.addEventListener("click", function () {
        changeImage(-1); // Go to previous image
    });

    nextBtn.addEventListener("click", function () {
        changeImage(1); // Go to next image
    });
});






