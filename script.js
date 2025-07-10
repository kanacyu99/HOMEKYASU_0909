// タスク内容（STEP0～STEP13）
const tasks = [
  { title: "0. 目標設定・コンセプト決め", hint: "誰に何を伝えたいかを明確にしよう！" },
  { title: "1. アイデア出し・企画", hint: "思いついたことをどんどん書いてみよう！" },
  { title: "2. 台本・構成設計", hint: "流れやナレーションも考えよう！" },
  { title: "3. 撮影計画・準備", hint: "機材・場所・スケジュールを確認しよう！" },
  { title: "4. 撮影", hint: "光・音・構図チェックして自信を持って！" },
  { title: "5. 素材整理・管理", hint: "良いテイクを選んで整理整頓！" },
  { title: "6. 編集（ポストプロダクション）", hint: "カットやBGMを入れて魅力UP！" },
  { title: "7. レビュー・修正", hint: "自分と仲間でWチェックしよう！" },
  { title: "8. 書き出し（レンダリング）", hint: "キレイに仕上げて書き出そう！" },
  { title: "9. サムネイル・説明文作成", hint: "クリックしたくなる工夫を！" },
  { title: "10. 公開準備", hint: "スケジュールや最終確認を忘れずに！" },
  { title: "11. 公開", hint: "おめでとう！いよいよ世の中へ！" },
  { title: "12. 分析・改善", hint: "振り返って次回に活かそう！" },
  { title: "13. 継続計画", hint: "次に向けての準備とふりかえり！" }
];

// タスク表示を生成
const stepsContainer = document.getElementById("steps-container");

tasks.forEach((task, index) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <h3>STEP${index}：${task.title}</h3>
    <p class="hint">💡 ヒント：${task.hint}</p>
    <textarea id="input${index}" placeholder="ここに入力してね..."></textarea>
  `;
  stepsContainer.appendChild(li);
});

// 保存処理
function saveProgress() {
  const inputs = tasks.map((_, i) => document.getElementById(`input${i}`).value);
  localStorage.setItem("homekyasuData", JSON.stringify(inputs));
  document.getElementById("status").textContent = "✅ 保存しました！";
}

// 読み込み処理
function loadProgress() {
  const saved = localStorage.getItem("homekyasuData");
  if (!saved) {
    document.getElementById("status").textContent = "⚠️ 保存データが見つかりません";
    return;
  }
  const data = JSON.parse(saved);
  data.forEach((value, i) => {
    const input = document.getElementById(`input${i}`);
    if (input) input.value = value;
  });
  document.getElementById("status").textContent = "📂 保存内容を読み込みました！";
}

// 削除処理
function clearProgress() {
  localStorage.removeItem("homekyasuData");
  document.getElementById("status").textContent = "🗑️ 保存内容を削除しました";
}
