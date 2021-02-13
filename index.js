const imageSlider = document.querySelector(".image-slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let translateX = 0;

nextBtn.addEventListener("click", (e) => {
    if (translateX === -150) {
        translateX = 0;
        imageSlider.style.transform = null;
    } else {
        translateX -= 50;
        imageSlider.style.transform=`translateX(${translateX}vw)`;
    }
});

prevBtn.addEventListener("click", (e) => {
    if (translateX === 0) {
        translateX = -150;
        imageSlider.style.transform = `translateX(${translateX}vw)`;
    } else {
        translateX += 50;
        imageSlider.style.transform = `translateX(${translateX}vw)`;
    }
});