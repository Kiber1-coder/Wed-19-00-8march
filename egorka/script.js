function start(event) {
  const container = document.getElementById("Flower-container");
  const button = event.target;

  button.style.transform = "scale(0.98)";
  button.style.background = "#3a3a3a";

  setTimeout(() => {
    button.style.transform = "scale(1)";
    button.style.background = "#1a1a1a";
  }, 200);

  container.innerHTML = "";

  const photoGrid = document.createElement("div");
  photoGrid.className = "photo-grid";

  const images = [
    { src: "kotik.png", alt: "Котик" },
    { src: "kotik2.png", alt: "Котик 2" },
    { src: "kotik3.png", alt: "Котик 3" },
    { src: "kotik4.png", alt: "Котик 4" },
    { src: "kotik5.png", alt: "Котик 5" },
  ];

  const shuffledImages = [...images].sort(() => Math.random() - 0.5);

  shuffledImages.forEach((img, index) => {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";

    const image = document.createElement("img");
    image.src = img.src;
    image.alt = img.alt;

    gridItem.appendChild(image);
    photoGrid.appendChild(gridItem);
  });

  container.appendChild(photoGrid);

  const messageBlock = document.createElement("div");
  messageBlock.className = "message-block";
  const messageText = document.createElement("p");
  messageText.textContent = "ты самая лучшая мама на свете";
  messageBlock.appendChild(messageText);
  container.appendChild(messageBlock);

  const floatingItems = document.createElement("div");
  floatingItems.className = "floating-items";

  const items = ["✶", "◌", "◍", "◎", "●", "◯", "✧", "⁎", "✱", "❋", "✿", "❀"];

  for (let i = 0; i < 12; i++) {
    const item = document.createElement("span");
    item.className = "float-item";
    item.textContent = items[Math.floor(Math.random() * items.length)];
    floatingItems.appendChild(item);
  }

  container.appendChild(floatingItems);

  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      createMinimalConfetti();
    }, i * 80);
  }

  button.textContent = "✶ opened ✶";

  setTimeout(() => {
    button.textContent = "открыть";
  }, 3000);
}

function createMinimalConfetti() {
  const confetti = document.createElement("div");
  confetti.className = "minimal-confetti";

  const symbols = ["✶", "◌", "◍", "◎", "●", "◯", "✧", "⁎", "✱", "❋"];
  confetti.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  confetti.style.left = Math.random() * 100 + "%";
  confetti.style.top = "-5%";
  confetti.style.fontSize = 0.8 + Math.random() * 1.5 + "rem";
  confetti.style.color = `rgba(100, 100, 100, ${0.2 + Math.random() * 0.3})`;

  document.body.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 4000);
}
