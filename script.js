const container = document.querySelector(".container");

container.addEventListener("mouseover", () => {
container.style.animationPlayState = "paused";
});

container.addEventListener("mouseout", () => {
container.style.animationPlayState = "running";
});