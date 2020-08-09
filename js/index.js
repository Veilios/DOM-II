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


const allH2 = document.querySelectorAll('h2');
allH2.forEach((e) => {
    e.addEventListener('auxclick', () => {
        e.style.color = "orange";
    });
});

const mainH = document.querySelector('h1');
mainH.addEventListener('dblclick', () => {
    mainH.style.color = "red";
    mainH.style.transform = "scale(1.2)";
});

const allP = document.querySelectorAll('p');
allP.forEach((e) => {
    e.addEventListener('select', () => {
        e.style.fontWeight = "bold";
    });
});

const drag = document.querySelectorAll('img, a');
drag.forEach((e) => {
    e.addEventListener('drag', () => {
        alert("That doesn't do anything!");
    });
});