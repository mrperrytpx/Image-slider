const imageSlider = document.querySelector(".image-slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const allImages = document.querySelectorAll("img");

let multiplier = 1;

nextBtn.addEventListener("click", (e) => {
    if (multiplier >= allImages.length - 1) return;
    imageSlider.style.transition = "transform 0.5s ease";
    multiplier++;
    imageSlider.style.transform = `translateX(${-50 * multiplier}vw)`;
});

prevBtn.addEventListener("click", (e) => {
    if (multiplier <= 0) return;
    imageSlider.style.transition = "transform 0.5s ease";
    multiplier--;
    imageSlider.style.transform = `translateX(${-50 * multiplier}vw)`;
});

imageSlider.addEventListener("transitionend", () => {
    if (multiplier === allImages.length - 1) {
        imageSlider.style.transition = null;
        multiplier = 1;
        console.log("back");
        imageSlider.style.transform = `translateX(${-50 * multiplier}vw)`;
    }
    if (multiplier === 0) {
        imageSlider.style.transition = null;
        multiplier = 4;
        console.log("front");
        imageSlider.style.transform = `translateX(${-50 * multiplier}vw)`;
    }
});