function startMagic() {
  const message = document.querySelector(".message");
  const button = document.querySelector(".bth");
  const container = document.getElementById("flower-container");

  // Меняем текст и добавляем красивый класс из CSS
  message.innerHTML =
    "ты - самое прекрасное, что есть на свете!<br>C праздником весны";
  message.classList.add("changed-message");

  // Прячем кнопку
  button.style.display = "none";

  // Массив с цветочками
  const icons = ["🪻", "💐", "🌹", "🌷", "🌼", "🌸", "🌺", "🌻"];

  // Создаем 40 цветочков (немного больше для красоты)
  for (let i = 0; i < 40; i++) {
    const flower = document.createElement("div");

    flower.classList.add("flower");
    flower.innerText = icons[Math.floor(Math.random() * icons.length)];

    // Случайное положение по горизонтали
    flower.style.left = Math.random() * 100 + "vw";

    // Случайная скорость анимации (от 2 до 6 секунд)
    flower.style.animationDuration = Math.random() * 4 + 2 + "s";

    // Случайная задержка старта (чтобы не все сразу летели)
    flower.style.animationDelay = Math.random() * 2 + "s";

    // Случайный размер (от 30 до 60 пикселей)
    flower.style.fontSize = Math.random() * 30 + 30 + "px";

    container.appendChild(flower);

    // Удаляем цветочек через 6 секунд
    setTimeout(() => {
      if (flower.parentNode) {
        flower.remove();
      }
    }, 6000);
  }
}
