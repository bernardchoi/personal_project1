const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.style.backgroundImage = `url(${bgImage.src})`;
document.body.style.backgroundSize = "100% 300%";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "0% 0%";