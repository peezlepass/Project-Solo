const constellations = document.querySelectorAll(".constellation");
for (let i = 0; i < constellations.length; i++) {
  const constellation = constellations[i];
  constellation.addEventListener("click", (event) => {
    event.preventDefault();
    constellation
      .querySelector(".constellation-content")
      .classList.remove("opacity-0");
  });
}

const contents = document.querySelectorAll(".constellation-content");
for (let i = 0; i < contents.length; i++) {
  const content = contents[i];
  content.addEventListener("click", (event) => {
    if (!content.classList.contains("opacity-0")) {
      event.preventDefault();
      event.stopPropagation();
      content.classList.add("opacity-0");
    }
  });
}

const bgMusic = new Audio("/audio/music.mp3");
const playButton = document.querySelector(".musicButton");
playButton.addEventListener("click", (event) => {
  if (bgMusic.paused) {
    bgMusic.currentTime = 74;
    bgMusic.play();
    playButton.innerHTML = "Pause me";
  } else {
    bgMusic.pause();
    playButton.innerHTML = "Play me";
  }
});
