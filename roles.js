const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Full Stack Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Software Engineer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Problem Solver";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);