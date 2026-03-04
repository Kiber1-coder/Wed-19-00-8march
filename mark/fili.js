function startMagic() {
  const met = document.getElementById("met");
  const button = document.querySelector(".buton");
  const frizer = document.getElementById("flover-friz");
  met.innerHTML =
    " поздравляю Нина с восьмым мартом ты моя любимая бабушка <br> но так как восьмое марта пока не наступило собщение кончилось покаа";
  met.style.color = "rgb(51, 17, 221)";

  button.style.display = "none";
  const icons = ["🌠", " 🌹 🌷 🌺 🥀 ", " 🌹 🌷 🌺 🥀 ", " 🌹", "  🥀 "];

  for (let i = 0; i < 30; i++) {
    const flover = document.createElement("div");
    flover.classList.add("flover");

    flover.innerText = icons[Math.floor(math.random() * icons.length)];

    flover.style.left = Math.random() * 100 + "vw";
    flover.style.animationDuration = Math.random() * 3 + 2 + "s";
    flover.style.fontSize = Math.random * 20 + 20 + "px";
    container.appendChild(flover);
    setTimeout(() => {
      flover.remove();
    }, 5000);
  }
}
