function startMagic() {
  const message = document.getElementById("message");
  const button = document.querySelector(".btn");
  const container = document.getElementById("flower-container");

  // Меняем текст сообщения
  message.innerHTML =
    "Ты самая прекрасная мама на свете, самая красивя и конечно же самая лучшая!<br>🌸 С праздником весны! 🌸";
  message.style.color = "#ff1493";
  message.style.fontWeight = "bold";

  // Прячем кнопку
  button.style.display = "none";

  // Массив с цветами (исправлено: добавлены кавычки)
  const icons = [
    "🌹",
    "🌷",
    "💐",
    "🪻",
    "🌸",
    "🌺",
    "🌼",
    "🌻",
    "🌸",
    "💮",
    "🏵️",
    "🌹",
    "🌷",
    "💐",
  ];

  // Создаем 30 цветов
  for (let i = 0; i < 30; i++) {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    // Выбираем случайный цветок (исправлено: Math.floor, не math.floor)
    flower.innerText = icons[Math.floor(Math.random() * icons.length)];

    // Случайная позиция по горизонтали
    flower.style.left = Math.random() * 100 + "vw";

    // Случайная длительность анимации (исправлено: Math.random(), не Math.random)
    flower.style.animationDuration = Math.random() * 3 + 2 + "s";

    // Случайный размер (исправлено: fontSize, не fontsize)
    flower.style.fontSize = Math.random() * 20 + 25 + "px";

    // Добавляем небольшую задержку для каждой анимации
    flower.style.animationDelay = Math.random() * 2 + "s";

    container.appendChild(flower);

    // Удаляем цветок через 5 секунд
    setTimeout(() => {
      flower.remove();
    }, 5000);
  }
}
