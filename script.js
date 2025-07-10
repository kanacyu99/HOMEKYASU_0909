const messages = [
  "その調子！",
  "よくできました！",
  "バッチリ！",
  "一歩前進！すごい！",
  "がんばったね！"
];

document.querySelectorAll('.task-check').forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      const box = document.getElementById('message-box');
      const msg = document.createElement('div');
      msg.className = 'message';
      msg.textContent = messages[Math.floor(Math.random() * messages.length)];
      box.innerHTML = ''; // 1つずつ表示
      box.appendChild(msg);
    }
  });
});
