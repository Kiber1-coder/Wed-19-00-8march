function startMagic() {
  const message = document.getElementById("message");
  const button = document.querySelector(".bth");
  const container = document.getElementById("flower-container");

  // Изменяем текст сообщения
  message.innerHTML =
    "Ты самое прекрасное, что есть на свете! Спасибо тебе что ты есть <br> С праздником весны! 🌸";
  message.style.color = "#d81b60";

  // Прячем кнопку
  button.style.display = "none";

  // Массив с цветами
  const icons = ["🌹", "🌺", "🌼", "🌷", "🌸", "🌻", "🪷", "💐"];

  // Создаем 40 цветов для большего эффекта
  for (let i = 0; i < 40; i++) {
    setTimeout(() => {
      const flower = document.createElement("div");
      flower.classList.add("flower");

      // Выбираем случайный цветок
      flower.innerText = icons[Math.floor(Math.random() * icons.length)];

      // Случайная позиция по горизонтали
      flower.style.left = Math.random() * 100 + "vw";

      // Случайная скорость падения
      flower.style.animationDuration = Math.random() * 3 + 2 + "s";

      // Случайный размер (ИСПРАВЛЕНО!)
      flower.style.fontSize = Math.random() * 30 + 20 + "px";

      // Небольшая задержка для каждого цветка
      flower.style.animationDelay = Math.random() * 2 + "s";

      container.appendChild(flower);

      // Удаляем цветок через 5 секунд
      setTimeout(() => {
        if (flower.parentNode) {
          flower.remove();
        }
      }, 5000);
    }, i * 50); // Создаем цветы с небольшой задержкой для более плавного эффекта
  }

  // Добавляем дополнительную анимацию для контейнера
  const card = document.getElementById("maincard");
  card.style.transform = "scale(1.02)";
  setTimeout(() => {
    card.style.transform = "scale(1)";
  }, 300);
}
