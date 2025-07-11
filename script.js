const totalSteps = 13;

function checkStepCompletion(stepNumber) {
  const inputs = document.querySelectorAll(`.step${stepNumber}`);
  return Array.from(inputs).every(input => input.value.trim() !== "");
}

function updateProgress() {
  let completed = 0;
  for (let i = 1; i <= totalSteps; i++) {
    if (checkStepCompletion(i)) completed++;
  }
  const progress = document.getElementById("progress-message");
  progress.textContent = `✅ 現在の達成数：${completed} / ${totalSteps}`;
}

function attachListeners() {
  for (let i = 1; i <= totalSteps; i++) {
    const inputs = document.querySelectorAll(`.step${i}`);
    inputs.forEach(input => input.addEventListener("input", updateProgress));
  }
  updateProgress(); // 初期状態も更新
}

function saveInputs() {
  const allInputs = document.querySelectorAll("input");
  const inputData = Array.from(allInputs).map(input => input.value.trim());
  localStorage.setItem("homerareData", JSON.stringify(inputData));
  alert("✅ 入力内容を保存しました！");
}

function loadInputs() {
  const allInputs = document.querySelectorAll("input");
  const saved = JSON.parse(localStorage.getItem("homerareData") || "[]");
  allInputs.forEach((input, index) => {
    input.value = saved[index] || "";
  });
  updateProgress();
  alert("📂 入力内容を呼び出しました！");
}

function clearSaved() {
  localStorage.removeItem("homerareData");
  alert("🗑 保存されたデータを削除しました。");
}

window.addEventListener("DOMContentLoaded", attachListeners);
