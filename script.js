let count = 0;

const counter = document.getElementById("counter");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");

increment.addEventListener("click", function () {
    count++;
    counter.textContent = count;
    counter.style.color = "green";
});

decrement.addEventListener("click", function () {
    if (count > 0) {
        count--;
        counter.textContent = count;
        counter.style.color = "red";
    }
});

const coordinateBlock = document.getElementById("coordinateBlock");
const coordinates = document.getElementById("coordinates");

coordinateBlock.addEventListener("mousemove", function (event) {
    const rect = coordinateBlock.getBoundingClientRect();

    const x = Math.round(event.clientX - rect.left);
    const y = Math.round(event.clientY - rect.top);

    coordinates.textContent = `x: ${x}, y: ${y}`;
});

const colorInput = document.getElementById("colorInput");

colorInput.addEventListener("input", function () {
    const color = colorInput.value.trim();

    if (color !== "" && CSS.supports("color", color)) {
        document.body.style.backgroundColor = color;
    }
});