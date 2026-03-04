function startMagic() {
  const message = document.getElementById("message");
  const button = document.querySelector(".bth");
  const container = document.getElementById("flower-container");

  message.innerHTML = "Ты самая лучшая!<br> С праздником весны";
  message.style.color = "#ff0b4c";

  button.style.display = "none";

  const icons = ["🌹", "🌷", "🌺", "🪻", "🌼"];

  for (let i = 0; i < 1000; i++) {
    const flower = document.createElement("div");

    flower.classList.add("flower");

    flower.innerText = icons[Math.flower(Math.random() * icons.length)];

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = Math.random() * 3 + 2 + "s";

    flower.style.fontSize = Math.random * 20 + 20 + "px";

    container.append(flower);

    setTimeout(() => {
      flower.remove();
    }, 5000);
  }
}
