const totalSteps = 14; // STEP0 ~ STEP13

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
}

function attachListeners() {
  for (let i = 0; i < totalSteps; i++) {
    const inputs = document.querySelectorAll(`.step${i}`);
    inputs.forEach(input => {
      input.addEventListener("input", () => {
        updateProgress();
      });
    });
  }
  updateProgress();
}

function saveCurrentData() {
  const data = {};
  for (let i = 0; i < totalSteps; i++) {
    const inputs = document.querySelectorAll(`.step${i}`);
    data[`STEP${i}`] = Array.from(inputs).map(input => input.value);
  }
  const timestamp = new Date().toISOString();
  localStorage.setItem(`homerare-save-${timestamp}`, JSON.stringify(data));
  alert("✅ 入力内容を保存しました！");
}

window.addEventListener("DOMContentLoaded", () => {
  attachListeners();
});
