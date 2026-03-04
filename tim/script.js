function startMagic() {
  const message = document.querySelector(".card p");
  const button = document.querySelector(".btn");
  const container = document.getElementById("flower-container");

  message.innerHTML =
    "Ты - самое прекрасное, что есть на земле! Я желаю тебе самого лучшего! С праздником весны! 🌷🌸💐";
  message.style.color = "#c44569";

  button.style.display = "none";

  const icons = ["🌹", "🌷", "💐", "🌼", "🌸", "🌺", "🥀"];

  for (let i = 0; i < 40; i++) {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.innerText = icons[Math.floor(Math.random() * icons.length)];
    flower.style.left = Math.random() * 100 + "%";
    flower.style.animationDuration = Math.random() * 3 + 3 + "s";
    flower.style.fontSize = Math.random() * 20 + 25 + "px";
    flower.style.opacity = Math.random() * 0.7 + 0.3;

    container.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 6000);
  }
}
