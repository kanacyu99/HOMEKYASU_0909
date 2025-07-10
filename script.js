document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const praiseMessages = [
        "素晴らしい！その調子！",
        "よくできました！さすがです！",
        "すごい！どんどん進んでいますね！",
        "完璧です！才能ありますね！",
        "ナイス！努力が実を結んでいます！",
        "最高！ゴールはもうすぐ！",
        "お見事！次も期待しています！"
    ];

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            const taskLabel = document.querySelector(`label[for="${event.target.id}"]`);
            const taskName = taskLabel ? taskLabel.textContent : 'このタスク';

            if (event.target.checked) {
                const randomPraise = praiseMessages[Math.floor(Math.random() * praiseMessages.length)];
                console.log(`${taskName} クリア！おめでとうございます！ ${randomPraise}`);
                // ここで画面上にメッセージを表示する処理も追加できます
                // 例: alert(`${taskName} クリア！おめでとうございます！ ${randomPraise}`);
            } else {
                console.log(`${taskName} のチェックが外れました。`);
            }
        });
    });
});
