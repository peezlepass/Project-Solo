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
const constellationButton = document.querySelector(".constellationButton");
constellationButton.addEventListener("click", (event) => {
  if (constellationButton.innerHTML === "Play me") {
    bgMusic.currentTime = 74;
    bgMusic.play();
    const constellations = document.querySelectorAll(".constellation");
    for (let i = 0; i < constellations.length; i++) {
      const constellation = constellations[i];
      constellation.classList.add("star-dance");
    }
    constellationButton.innerHTML = "Pause me";
  } else {
    bgMusic.pause();
    const constellations = document.querySelectorAll(".constellation");
    for (let i = 0; i < constellations.length; i++) {
      const constellation = constellations[i];
      constellation.classList.remove("star-dance");
    }
    constellationButton.innerHTML = "Play me";
  }
});
