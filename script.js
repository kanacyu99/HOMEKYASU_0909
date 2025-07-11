const steps = [
  {
    title: "STEP0：目標設定・コンセプト決め",
    items: [
      "目的を定める（誰に、何を、どんな感情を与えるか）",
      "視聴者ターゲットを明確化",
      "動画ジャンルを決定（解説、Vlog、広告、レビュー、ショート動画など）",
      "成功の定義（再生数、登録者数、販売、認知など）"
    ]
  },
  {
    title: "STEP1：アイデア出し・企画",
    items: [
      "テーマ出し（複数案ブレスト）",
      "タイトル案検討",
      "方向性決定",
      "差別化ポイントを整理",
      "構成要素リスト作成",
      "競合・参考動画リサーチ"
    ]
  },
  {
    title: "STEP2：台本・構成設計",
    items: [
      "大枠構成を決める（導入・本編・まとめ・CTAなど）",
      "詳細な台本執筆",
      "セリフ・ナレーション原稿作成",
      "ストーリーボード（絵コンテや簡易図解）",
      "カット割り計画",
      "BGM/効果音のイメージ"
    ]
  },
  {
    title: "STEP3：撮影計画・準備",
    items: [
      "撮影スケジュール決定",
      "ロケーション選定",
      "照明プラン検討",
      "カメラアングルプラン",
      "撮影機材チェック（カメラ、三脚、マイクなど）",
      "小道具・衣装用意",
      "キャスト・スタッフ調整",
      "セリフ練習",
      "撮影許可手続き"
    ]
  },
  {
    title: "STEP4：撮影",
    items: [
      "セットアップ（照明・カメラ設定・ホワイトバランス）",
      "音声チェック",
      "テスト撮影",
      "本番撮影",
      "進行管理（カットリスト、リテイク）",
      "バックアップ保存"
    ]
  },
  {
    title: "STEP5：素材整理・管理",
    items: [
      "フッテージ取り込み",
      "ファイル名整理",
      "バックアップ作成",
      "良いテイクの選定",
      "必要な素材タグ付け"
    ]
  },
  {
    title: "STEP6：編集（ポストプロダクション）",
    items: [
      "編集用プロジェクト作成",
      "カット編集（無駄を省く）",
      "シーン構成調整",
      "音声編集（ノイズ除去、EQなど）",
      "BGM/効果音挿入",
      "テロップ・字幕作成",
      "画像/グラフィック挿入",
      "トランジション調整",
      "色調整・カラーグレーディング",
      "特殊効果（必要に応じて）",
      "仮書き出し・プレビュー確認"
    ]
  },
  {
    title: "STEP7：レビュー・修正",
    items: [
      "自分で確認",
      "チームやクライアントに確認依頼",
      "フィードバック収集",
      "修正実施",
      "最終チェック"
    ]
  },
  {
    title: "STEP8：書き出し（レンダリング）",
    items: [
      "解像度・フレームレート設定",
      "コーデック選択（H.264, ProResなど）",
      "ファイルサイズ最適化",
      "書き出し実行",
      "書き出し後の再生確認"
    ]
  },
  {
    title: "STEP9：サムネイル・説明文作成",
    items: [
      "キャッチーなサムネイルデザイン",
      "タイトル最適化",
      "SEOキーワード検討",
      "説明文作成",
      "タグ設定"
    ]
  },
  {
    title: "STEP10：公開準備",
    items: [
      "プラットフォーム選定（YouTube, TikTokなど）",
      "スケジュール設定",
      "チャンネル管理（再生リストなど）",
      "公開前最終確認"
    ]
  },
  {
    title: "STEP11：公開",
    items: [
      "動画アップロード",
      "公開設定（公開、限定、予約）",
      "SNSやブログで告知",
      "メーリングリスト・コミュニティ投稿"
    ]
  },
  {
    title: "STEP12：分析・改善",
    items: [
      "視聴データ分析（再生数、視聴維持率など）",
      "コメント・反応確認",
      "反省点整理",
      "次回企画へのフィードバック"
    ]
  },
  {
    title: "STEP13：継続計画",
    items: [
      "次回動画のアイデアメモ",
      "投稿カレンダー更新",
      "モチベーション管理",
      "チームでの振り返り"
    ]
  }
];

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
