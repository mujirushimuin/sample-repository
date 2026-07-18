const button = document.getElementById("actionButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  const now = new Date();
  const formatted = now.toLocaleString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  message.textContent = `ボタンがクリックされました！現在の時刻: ${formatted}`;
});
