const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Front End Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Open Source Contributor";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);