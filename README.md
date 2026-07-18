# 覚えたことまとめ

- 前提、今後メモする際は**これ**で書け

## githubとは

- 自分が書いたコードをweb上にあげて、多くの人が見たり自分のPCにコードを落としたりできるコンテンツ

### リポジトリとは

- github上でプロジェクトを格納する場所

#### リポジトリの作成方法

 1. https://github.com のTop repositoriesの右にあるNewより作成
 2. https://github.com/new の画面に移行
 3. Repositoryの名前を決める
 4. DescriptionにRepositoryの説明を入力
 5. Choose VisibilityにてPublicかPrivateを決める
 6. Add READMEは基本Onにする
 7. Add .gitignoreは適宜決める
 ※ Add .gitignore→アップロードの制限を指定するもの
 8. Add licenseは知らん
 9. 上記を確認したのちに、Create repositoryを押下。作成。

#### リポジトリにあげるまでの一連の流れ

 1. saveする
 2. 左タブのソース管理に通知が来るのでタブを押す
 3. 変更されたファイルをクリックし、差分を確認
 4. +を押し、コミットメッセージを書く(例.README.mdを更新)
 5. ✓コミットを押すことでリポジトリへのアップ準備が整う
 6. ターミナルにてコマンド「git push origin main」を入力
 ※あくまで大本を直接書き換える方法なので注意！
 7. 反映が完了、githubにてリポジトリが変わっているかを確認し終了

