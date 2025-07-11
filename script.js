const steps = [
  {
    title: "STEP0：目標設定・コンセプト決め",
    items: [
      "目的を定める：",
      "ターゲットを明確化：",
      "動画ジャンルを決定：",
      "成功の定義："
    ]
  },
  {
    title: "STEP1：アイデア出し・企画",
    items: [
      "テーマ出し：",
      "タイトル案検討：",
      "差別化ポイント："
    ]
  },
  {
    title: "STEP2：台本・構成設計",
    items: [
      "構成決定：",
      "台本作成：",
      "セリフ原稿作成："
    ]
  },
  {
    title: "STEP3：撮影計画・準備",
    items: [
      "スケジュール決定：",
      "ロケ地選定：",
      "機材準備："
    ]
  },
  {
    title: "STEP4：撮影",
    items: [
      "セットアップ：",
      "音声確認：",
      "本番撮影："
    ]
  },
  {
    title: "STEP5：素材整理・管理",
    items: [
      "素材取り込み：",
      "ファイル整理：",
      "バックアップ："
    ]
  },
  {
    title: "STEP6：編集（ポストプロダクション）",
    items: [
      "カット編集：",
      "BGM・効果音：",
      "字幕挿入："
    ]
  },
  {
    title: "STEP7：レビュー・修正",
    items: [
      "自分で確認：",
      "チームで確認：",
      "修正実施："
    ]
  },
  {
    title: "STEP8：書き出し（レンダリング）",
    items: [
      "設定確認：",
      "書き出し実行：",
      "最終チェック："
    ]
  },
  {
    title: "STEP9：サムネイル・説明文作成",
    items: [
      "サムネ作成：",
      "説明文作成：",
      "タグ設定："
    ]
  },
  {
    title: "STEP10：公開準備",
    items: [
      "スケジュール設定：",
      "最終確認：",
      "予約設定："
    ]
  },
  {
    title: "STEP11：公開",
    items: [
      "動画アップロード：",
      "SNSで告知：",
      "コメント確認："
    ]
  },
  {
    title: "STEP12：分析・改善",
    items: [
      "視聴データ確認：",
      "反省点整理：",
      "改善案作成："
    ]
  },
  {
    title: "STEP13：継続計画",
    items: [
      "次回アイデアメモ：",
      "投稿カレンダー更新：",
      "モチベーション管理：",
      "チーム振り返り："
    ]
  }
];

// HTML生成
const list = document.getElementById("task-list");

steps.forEach((step, i) => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${i + 1}. ${step.title}</strong><ul>` +
    step.items.map((item, j) =>
      `<li>${item}<input type="text" class="step${i}" /></li>`
    ).join('') +
    '</ul>';
  list.appendChild(li);
});

function checkStepCompletion(stepNumber) {
  const inputs = document.querySelectorAll(`.step${stepNumber}`);
  return Array.from(inputs).every(input => input.value.trim() !== "");
}

function updateProgress() {
  let completed = 0;
  for (let i = 0; i < steps.length; i++) {
    if (checkStepCompletion(i)) {
      completed++;
    }
  }
  document.getElementById("progress-message").textContent =
    `✅ 現在の達成数：${completed} / ${steps.length}`;
}

function attachListeners() {
  for (let i = 0; i < steps.length; i++) {
    const inputs = document.querySelectorAll(`.step${i}`);
    inputs.forEach(input => {
      input.addEventListener("input", updateProgress);
    });
  }
  updateProgress();
}

function saveInputs() {
  const allInputs = document.querySelectorAll("input");
  const values = Array.from(allInputs).map(input => input.value.trim());
  const data = { timestamp: new Date().toISOString(), values };
  const existing = JSON.parse(localStorage.getItem("homerareData") || "[]");
  existing.push(data);
  localStorage.setItem("homerareData", JSON.stringify(existing));
  alert("保存しました！");
}

window.addEventListener("DOMContentLoaded", attachListeners);
