// Your code goes here
const logoImg = document.querySelectorAll('img');
logoImg.forEach((e) => {
    e.addEventListener('mouseenter', () => {
        e.style.transform = "scale(1.2)";
        e.style.transition = "transform 1s";
    });
    e.addEventListener('mouseleave', () => {
        e.style.transform = "scale(1)";
    });
});

const navBar = document.querySelectorAll('.nav-link');
navBar.forEach((e) => {
    e.addEventListener('mouseover', () => {
        e.style.transform = "scale(1.2)";
        e.style.transition = "tranform 2s";
        e.style.color = "blueviolet";
    });
    e.addEventListener('mouseout', () => {
        e.style.transform = "scale(1)";
        e.style.color = "black";
    });
});


const allH = document.querySelectorAll('h2');
allH.forEach((e) => {
    e.addEventListener('auxclick', () => {
        e.style.color = "orange";
    })
})