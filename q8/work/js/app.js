$(function() {
  // 書籍情報を受け取り、その情報をHTML要素に変換する
  function showResult(data) {
    // 検索ワードが入力された場合、".massage"クラスを削除する
    // メッセージ内容：正常に通信できませんでした。インターネットの接続の確認をしてください。
    $(".message").remove()

    // 変数"bookItems"を宣言
    var bookItems;

    // 変数bookItems内に書籍情報が存在しない場合underfinedで返し、
    // 書籍情報が存在し０より大きい場合、data配列の０番目の要素からitemプロパティを取得（＝書籍情報） 繰り返し処理（each）を実行
    if (0 < (null === (bookItems = data[0].items) ? void 0 : bookItems.length)) {
      // 書籍情報をループして表示
      $.each(data[0].items, function (index, item) {
          // 変数"title"を宣言　titleプロパティが存在する場合はその値を変数に代入し、しない場合は”タイトル不明”を代入
          var title = item.title ? item.title : "タイトル不明";
          // 変数"creator"を宣言　creatorプロパティが存在する場合はその値を変数に代入し、しない場合は”作者不明”を代入
          var creator = item["dc:creator"] ? item["dc:creator"] : "作者不明";
          // 変数"publisher"を宣言　publisherプロパティが存在する場合はその値を変数に代入し、しない場合は”出版社不明”を代入
          // 出版社が複数ある場合、最初の1つを表示
          var publisher = item["dc:publisher"] ? item["dc:publisher"][0] : "出版社不明";
          // 変数"link"を宣言
          var link = item.link["@id"];
          // 変数"html"を宣言  HTML形式の文字列にする
          var html = '<li class="lists-item"><div class="list-inner"><p>タイトル：' + title + '</p><p>作者：' + creator + '</p><p>出版社：'
          + publisher + '</p><a href="' + link + '"target="_blank">書籍情報</a></div></li>';
          // .lists要素に変数"html"に格納された書籍情報を追加し、リストを作成する
          $(".lists").prepend(html);
      });

    // if条件に当てはまらなかった（＝検索結果がない）場合、検索結果の前にメッセージを表示
    }else {
      $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>');
    }
  // ページカウントの初期値を1に設定
  var pageCount = 1;
  // 変数"lastSeachWord"に空の値を代入する
  var lastSeachWord = "";

  // 検索ボタンをクリックした時
  $(".search-btn").on("click",function(){
      // 検索エリアに入力した内容（検索ワード）を変数"searchWord"に代入
      var searchWord = $("#search-input").val();
      // 現在の検索ワードが前回の検索ワード"lastSeachWord"と異なる場合
      if (searchWord !==lastSeachWord){
        // ページ番号をリセット
        pageCount = 1;
        // リストの中身を空にする
        $(".lists").empty();
        //変数"lastSeachWord"に新しい検索ワードを格納する
        lastSeachWord = searchWord;
      // 現在の検索ワードが前回と等しい場合
      }else {
        // ページ番号を増加
        pageCount++;
      };

      // Ajaxの実行
      //通信成功した時の処理　"response"という引数で結果を受け取り、書籍情報を表示する
      $.ajax({
        url: "https://ci.nii.ac.jp/books/opensearch/search?title=" + searchWord + "&format=json&p=" + pageCount + "&count=20",
        method: "GET"
        })
        .done(function (response) {
        showResult(response["@graph"]);
        })
      // 通信失敗した時に”err”にサーバーから送られてきたエラー内容を受け取る
      .fail(function(err){
        // リストの中身を空にする
        $(".lists").empty();
        // 検索ワードが入力された場合、".massage"クラスを削除する
        $(".message").remove();
      });
    });
  };
});