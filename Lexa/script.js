// script.js
function StartMagic() {
  const message = document.getElementById("message");
  const button = document.querySelector(".bth");
  const container = document.getElementById("Flower");

  message.innerHTML =
    "ТЫ - самая лучшая мама на свете <br> желаю счастья и здоровья!";
  message.style.color = "#d81e8b"; // исправленный цвет
  button.style.display = "none";

  const icons = ["🌹", "❤️", "💐", "💮", "🌼"];

  for (let i = 0; i < 40; i++) {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    // исправлено Math.floor
    flower.innerText = icons[Math.floor(Math.random() * icons.length)];

    flower.style.left = Math.random() * 100 + "vw";

    // исправлено animationDuration
    flower.style.animationDuration = Math.random() * 3 + 2 + "s";

    // добавляем случайное смещение для разнообразия
    flower.style.setProperty("--x-offset", Math.random() * 40 - 20 + "px");

    container.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 5000);
  }
}
