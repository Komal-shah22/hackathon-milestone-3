document.addEventListener("DOMContentLoaded", function () {
    var centerButton = document.querySelector(".center");
    var boxes = document.querySelectorAll(".box");
    var isVisible = false;
    centerButton.addEventListener("click", function () {
        isVisible = !isVisible;
        boxes.forEach(function (box) {
            box.style.display = isVisible ? "block" : "none";
        });
    });
});
