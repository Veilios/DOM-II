// Your code goes here
const logoImgContainer = document.querySelector('.intro');
logoImgContainer.style.overflow = "hidden";
const logoImg = document.querySelector('.intro img');
logoImg.addEventListener('mouseenter', () => {
    logoImg.style.transform = "scale(1.2)";
    logoImg.style.transition = "transform 1s";
});
logoImg.addEventListener('mouseleave', () => {
    logoImg.style.transform = "scale(1)";
});

