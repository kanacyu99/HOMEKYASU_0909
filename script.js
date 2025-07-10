// 総ステップ数（STEP0～STEP13の14ステップ）
const totalSteps = 14;

// 各STEPの入力がすべて埋まっていれば達成とカウント
function checkStepCompletion(stepNumber) {
  const inputs = document.querySelectorAll(`.step${stepNumber}`);
  return Array.from(inputs).every(input => input.value.trim() !== "");
}

// 達成数をカウントして表示・スタンプ表示も
function updateProgress() {
  let completed = 0;
  for (let i = 0; i < totalSteps; i++) {
    if (checkStepCompletion(i)) {
      completed++;
    }
  }

  const message = document.getElementById("progress-message");
  message.textContent = `✅ 現在の達成数：${completed} / 13`;

  // スタンプの表示（達成度に応じて変化）
  let praise = "💡 スタートしてみよう！";
  if (completed >= 13) {
    praise = "🕊️ 空へ旅立つ！";
  } else if (completed >= 10) {
    praise = "🕊️ 成鳥に！";
  } else if (completed >= 6) {
    praise = "🐤 ヒナが成長中…";
  } else if (completed >= 3) {
    praise = "🥚 卵がうごきだした…";
  }
  if (!document.getElementById("stamp")) {
    const stamp = document.createElement("div");
    stamp.id = "stamp";
    stamp.style.marginTop = "1em";
    stamp.style.fontSize = "1.2em";
    message.after(stamp);
  }
  document.getElementById("stamp").textContent = praise;
}

// すべての入力欄にイベントを設定
function attachListeners() {
  for (let i = 0; i < totalSteps; i++) {
    const inputs = document.querySelectorAll(`.step${i}`);
    inputs.forEach(input => {
      input.addEventListener("input", updateProgress);
    });
  }

  updateProgress(); // 初回表示でも反映
}

window.addEventListener("DOMContentLoaded", () => {
  attachListeners();
});
