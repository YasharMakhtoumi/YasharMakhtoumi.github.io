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
        "Photos/agland_hills.jpg",
        "Photos/agland.jpg",
        "Photos/agri_data.jpg",
        "Photos/drone.JPG" ,
        "Photos/DSC02371_1.JPG" ,
        "Photos/Great_plains_storm_-_Great_Sand_Dunes_National_Park.jpg" ,
        "Photos/Hickahala Creek1.jpg" ,
        "Photos/photo_2025-02-02_17-29-24.jpg" ,
        "Photos/photo_2025-02-02_17-29-30.jpg" ,
        "Photos/photo_2025-02-02_17-29-33.jpg" ,
        "Photos/photo_2025-02-02_17-29-45.jpg" ,
        "Photos/river_MLRS.jpg" ,
       



    ];

    let currentIndex = 0;
    const galleryImg = document.getElementById("gallery-img");

    galleryImg.addEventListener("click", function () {
        galleryImg.style.opacity = 0; // Start fade-out effect

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length; // Cycle through images
            galleryImg.src = images[currentIndex]; // Change image
            galleryImg.style.opacity = 1; // Fade-in effect
        }, 300); // 300ms matches CSS transition
    });
});











document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "Photos/beach.jpg",
        "Photos/agland_hills.jpg",
        "Photos/agland.jpg",
        "Photos/agri_data.jpg",
        "Photos/drone.JPG" ,
        "Photos/DSC02371_1.JPG" ,
        "Photos/Great_plains_storm_-_Great_Sand_Dunes_National_Park.jpg" ,
        "Photos/Hickahala Creek1.jpg" ,
        "Photos/photo_2025-02-02_17-29-24.jpg" ,
        "Photos/photo_2025-02-02_17-29-30.jpg" ,
        "Photos/photo_2025-02-02_17-29-33.jpg" ,
        "Photos/photo_2025-02-02_17-29-45.jpg" ,
        "Photos/river_MLRS.jpg" ,
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








document.addEventListener("DOMContentLoaded", function () {
    // ... (same image array and currentIndex as before)
    const images = [
        "Photos/beach.jpg",
        "Photos/agland_hills.jpg",
        "Photos/agland.jpg",
        "Photos/agri_data.jpg",
        "Photos/drone.JPG" ,
        "Photos/DSC02371_1.JPG" ,
        "Photos/Great_plains_storm_-_Great_Sand_Dunes_National_Park.jpg" ,
        "Photos/Hickahala Creek1.jpg" ,
        "Photos/photo_2025-02-02_17-29-24.jpg" ,
        "Photos/photo_2025-02-02_17-29-30.jpg" ,
        "Photos/photo_2025-02-02_17-29-33.jpg" ,
        "Photos/photo_2025-02-02_17-29-45.jpg" ,
        "Photos/river_MLRS.jpg" ,
    ];
    const galleryImg = document.getElementById("gallery-img");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    function updateButtons() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === images.length - 1;
    }

    function changeImage(direction) {
        galleryImg.style.opacity = 0;

        setTimeout(() => {
            currentIndex = (currentIndex + direction + images.length) % images.length;
            galleryImg.src = images[currentIndex];
            galleryImg.style.opacity = 1;
            updateButtons(); // Enable/disable buttons after image change
        }, 300);
    }

    prevBtn.addEventListener("click", () => changeImage(-1));
    nextBtn.addEventListener("click", () => changeImage(1));

    updateButtons(); // Set initial button states
});