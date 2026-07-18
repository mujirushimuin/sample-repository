const button = document.getElementById("actionButton");
const asyncButton = document.getElementById("asyncButton");
const message = document.getElementById("message");

// 元のボタンの処理：シンプルなメッセージ表示
button.addEventListener("click", () => {
  message.textContent = "ボタンが押されました。";
});

// APIにお願いしてデータを取ってくる関数
async function loadApiData() {
  try {
    // fetch は「外部のAPIにアクセスする」ための関数
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    // もしうまく取れなかったらエラーにする
    if (!response.ok) {
      throw new Error("APIからデータを取得できませんでした");
    }

    // JSON形式のデータをJavaScriptのオブジェクトに変換する
    const data = await response.json();
    return data;
  } catch (error) {
    // 失敗したときはコンソールに出して、呼び出し元に知らせる
    console.error(error);
    return null;
  }
}

asyncButton.addEventListener("click", async () => {
  // 読み込み中であることを最初に伝える
  message.textContent = "APIを読み込んでいます...";

  // await はAPIの結果が返ってくるまで待つ
  const data = await loadApiData();

  if (data) {
    // 取れたデータを画面に表示する
    message.textContent = `取得できました！タイトル: ${data.title}（完了: ${data.completed ? "はい" : "いいえ"}）`;
  } else {
    message.textContent = "読み込みに失敗しました。";
  }
});
