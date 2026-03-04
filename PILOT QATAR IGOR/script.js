function startMagic() {
  const message = document.getElementById("message");
  const button = document.querySelector(".bth");
  const container = document.getElementById("flower-container");
  message.inner.HTML = "Вы самые хорошие одноклассницы!";
  message.style.color = "#cc3366";

  button.style.display = "none";

  const icons = ["🌹", "🪻", "🥀", "💐", "🌸"];

  for (let i = 0; i < 60; i++) {
    const flower = document.createElement("div");

    flower.classList.add("flower");

    flower.innText = icons[Math.random() * icons.lenght];

    flower.style.left = Math.random() * 100 + "vw";

    flower.style.animationDuration = Math.random() * 3 + 2 + "s";

    flower.style.fontSize = Math.random() * 20 + 30 + "px";

    container.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 5000);
  }
}
