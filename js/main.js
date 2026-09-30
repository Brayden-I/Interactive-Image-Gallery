console.log("Main.js loaded")

const initialImages = [
    "img/earth.jpg", "img/mars.jpg", "img/saturn.jpg", "img/jupiter.jpg"
];
const replacementImages = [
    "img/moon.jpg", "img/milky-way.jpg", "img/venus.jpg", "img/uranus.jpg"
];
const initialAlts = [
    "Illustration of Earth",
    "Illustration of Mars",
    "Illustration of Saturn",
    "Illustration of Jupiter",
];
const replacementAlts = [
    "Illustration of the Moon",
    "Illustration of the Milky Way",
    "Illustration of Venus",
    "Illustration of Uranus"
];
const colors = ["lightblue", "lightgreen", "lavender", "peachpuff"];

function setImages(paths, alts) {
    for (let i = 0; i < paths.length; i++) {
        const image = document.getElementById("img" + i);
        image.src = paths[i];
        image.alt = alts[i];
    }
}

setImages(initialImages, initialAlts);

function updateHeading() {
    const value = document.getElementById("messageInput").value.trim();
    const title = document.getElementById("title");
    if (value) {
        title.textContent = value;
    } else {
        title.textContent = "You didn’t enter anything!";
    }
}

function buildColorOptions() {
    const select = document.getElementById("colorSelect");
    const previous = select.value;
    select.replaceChildren();
    for (let i = 0; i < colors.length; i++) {
        const option = document.createElement("option");
        option.textContent = colors[i];
        option.value = colors[i];
        select.appendChild(option);
    }
    select.value = previous;
    if (!previous) select.selectedIndex = -1;
}

function changeBackground() {
    const selected = document.getElementById("colorSelect").value;
    document.body.style.backgroundColor = selected;
    console.log("Selected background color:", selected);
}

buildColorOptions();

function addColor() {
    const input = document.getElementById("colorInput");
    const value = input.value.trim();
    if (!value) return;
    colors.push(value);
    buildColorOptions();
    input.value = "";
    console.log("Updated colors array:", colors);
}

function changeImages() {
    setImages(replacementImages, replacementAlts);
    console.log("Images changed to:", replacementImages);
}

document.getElementById("changeImgBtn").addEventListener("click", changeImages)
document.getElementById("messageInput").addEventListener("blur", updateHeading);
document.getElementById("colorSelect").addEventListener("change", changeBackground);
document.getElementById("colorInput").addEventListener("blur", addColor);
