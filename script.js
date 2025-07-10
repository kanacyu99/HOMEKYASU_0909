// STEPごとの入力項目（クラス名）で達成を管理
const totalSteps = 13;

function checkStepCompletion(stepNumber) {
  const inputs = document.querySelectorAll(`.step${stepNumber}`);
  return Array.from(inputs).every(input => input.value.trim() !== "");
}

function updateProgress() {
  let completed = 0;
  for (let i = 0; i < totalSteps; i++) {
    if (checkStepCompletion(i)) {
      completed++;
    }
  }

  const progressMessage = document.getElementById("progress-message");
  progressMessage.textContent = `✅ 現在の達成数：${completed} / ${totalSteps}`;

  // スタンプ変化用（オプション）
  // const stamp = document.getElementById("stamp");
  // if (stamp) {
  //   if (completed >= 13) stamp.textContent = "🕊️ 空へ旅立つ！";
  //   else if (completed >= 10) stamp.textContent = "🕊️ 成鳥に！";
  //   else if (completed >= 6) stamp.textContent = "🐤 ヒナが成長中…";
  //   else if (completed >= 3) stamp.textContent = "🥚 卵がうごきだした…";
  //   else stamp.textContent = "💡 スタートしてみよう！";
  // }
}

// 入力イベントを設定
function attachListeners() {
  for (let i = 0; i < totalSteps; i++) {
    const inputs = document.querySelectorAll(`.step${i}`);
    inputs.forEach(input => {
      input.addEventListener("input", updateProgress);
    });
  }

  // 初回読み込み時にもカウント更新
  updateProgress();
}

window.addEventListener("DOMContentLoaded", () => {
  attachListeners();
});
