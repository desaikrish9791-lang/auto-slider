let images = [
  "https://picsum.photos/600/300?1",
  "https://picsum.photos/600/300?2",
  "https://picsum.photos/600/300?3"
];

let index = 0;
let slide = document.getElementById("slide");

setInterval(() => {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  slide.src = images[index];
}, 3000);