document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".task-check");

  const messages = {
    task0: "目標を決めたあなた、もう一歩前進だね！✨",
    task1: "アイデアが光ってるよ！その調子！🌟",
    task2: "構成バッチリ！台本づくりおつかれさま🎬",
    task3: "撮影の準備、ぬかりないね！📷",
    task4: "撮影おつかれさま！いい表情出てたよ！😄",
    task5: "素材整理、コツコツ進めてすごい！📁",
    task6: "編集職人のような仕上がりだね✂️",
    task7: "レビュー完了！成長が見えるよ👏",
    task8: "書き出し完了！もうすぐ公開！🚀",
    task9: "サムネと説明文、魅力的にできたね🎨",
    task10: "公開準備OK！いよいよだね✨",
    task11: "アップ完了！世界に発信だ🌏",
    task12: "しっかり分析して次に活かせるね📊",
    task13: "継続こそ力なり！すごいぞあなた🔥"
  };

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const taskId = checkbox.id.replace(/-\d+$/, ""); // task0-1 → task0

      const messageBox = checkbox.closest("li").querySelector(".message");
      if (checkbox.checked) {
        messageBox.textContent = messages[taskId] || "がんばったね！";
      } else {
        messageBox.textContent = "";
      }
    });
  });
});
