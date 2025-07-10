// 保存対象のステップ数
const totalSteps = 13;

// 保存キーのプレフィックス（ブラウザのローカルストレージ用）
const STORAGE_KEY_PREFIX = "homekyasu_step";

// STEPごとの入力欄の確認と保存対象かチェック
function checkStepCompletion(stepNumber) {
  const inputs = document.querySelectorAll(`.step${stepNumber}`);
  return Array.from(inputs).every(input => input.value.trim() !== "");
}

// 達成状況を更新（スタンプも反映）
function updateProgress() {
  let completed = 0;
  for (let i = 0; i < totalSteps; i++) {
    if (checkStepCompletion(i)) {
      completed++;
    }
  }

  const progressMessage = document.getElementById("progress-message");
  if (progressMessage) {
    progressMessage.textContent = `✅ 現在の達成数：${completed} / ${totalSteps}`;
  }

  const stamp = document.getElementById("stamp");
  if (stamp) {
    if (completed >= 13) stamp.textContent = "🕊️ 空へ旅立つ！";
    else if (completed >= 10) stamp.textContent = "🕊️ 成鳥に！";
    else if (completed >= 6) stamp.textContent = "🐤 ヒナが成長中…";
    else if (completed >= 3) stamp.textContent = "🥚 卵がうごきだした…";
    else stamp.textContent = "💡 スタートしてみよう！";
  }
}

// 入力欄の保存
function saveInput(stepNumber) {
  const inputs = document.querySelectorAll(`.step${stepNumber}`);
  inputs.forEach((input, index) => {
    const key = `${STORAGE_KEY_PREFIX}_${stepNumber}_${index}`;
    localStorage.setItem(key, input.value);
  });
}

// 保存された入力値の読み込み
function loadInput(stepNumber) {
  const inputs = document.querySelectorAll(`.step${stepNumber}`);
  inputs.forEach((input, index) => {
    const key = `${STORAGE_KEY_PREFIX}_${stepNumber}_${index}`;
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
      input.value = savedValue;
    }
  });
}

// 各入力欄にイベントを登録
function attachListeners() {
  for (let i = 0; i < totalSteps; i++) {
    loadInput(i);
    const inputs = document.querySelectorAll(`.step${i}`);
    inputs.forEach(input => {
      input.addEventListener("input", () => {
        saveInput(i);
        updateProgress();
      });
    });
  }
  updateProgress();
}

// 起動時に実行
window.addEventListener("DOMContentLoaded", attachListeners);
