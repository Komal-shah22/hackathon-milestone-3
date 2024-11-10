
document.addEventListener("DOMContentLoaded", function () {
    const centerButton = document.querySelector(".center") as HTMLElement;
    const boxes = document.querySelectorAll(".box") as NodeListOf<HTMLElement>;
    let isVisible = false;

    centerButton.addEventListener("click", function () {
        isVisible = !isVisible;

        boxes.forEach((box: HTMLElement) => {
            box.style.display = isVisible ? "block" : "none";
        });
    });
});
