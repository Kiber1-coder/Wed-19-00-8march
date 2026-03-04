function startMagic() {
  const message = document.getElementById("message");
  const button = document.querySelector(".btn");
  const container = document.getElementById("flower-container");

  message.innerHTML =
    "Ты - самое прекрасное, что есть на земле! Я желаю тебя самого лучшего С праздником весны!";
  message.style.color = "#dd477eff";

  button.style.display = "none";

  const icons = ["🌹", "🌷", "💐", "🌼", "🥀"];

  for (let i = 0; i < 30; i++) {
    const flower = document.createElement("div");

    flower.classList.add("flower");

    flower.innerText = icons[Math.floor(Math.random() * icons.length)];

    flower.style.left = Math.random() * 100 + "vw";

    flower.style.animationDuration = Math.random() * 3 + 2 + "s";

    flower.style.fontsize = Math.random * 20 + 20 + "px";

    container.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 5000);
  }
}
