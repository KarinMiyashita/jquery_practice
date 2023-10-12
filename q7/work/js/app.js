$(function(){
  // .btn__submitをイベント対象にし、アカウント作成のボタンがクリックされた時
  // 以下の要素をコンソールに表示する
  $(".btn__submit").on("click",function(){
    // "family__name"ラベル内に入力された値を項目名”名字”としてコンソールに表示する
    console.log("名字");
    console.log($("#family__name").val());

    // "given__name"ラベル内に入力された値を項目名”名前”としてコンソールに表示する
    console.log("名前");
    console.log($("#given__name").val());

    // ".year",".month",".day"内に入力された値を項目名”生年月日”としてコンソールに表示する
    console.log("生年月日");
    console.log($(".year").val() + "年" + $(".month").val() + "月" +$(".day").val() + "日");

    // "gender"ラベル内で選択された項目を項目名”性別”としてコンソールに表示する
    console.log("性別");
    console.log($('[name="gender"]:checked').val());

    // ".occupation"内で選択された値を項目名”職業”としてコンソールに表示する
    console.log("職業");
    console.log($(".occupation").val());

    // "account__name"ラベル内に入力された値を項目名”アカウント名”としてコンソールに表示する
    console.log("アカウント名");
    console.log($("#account__name").val());

    // "email"ラベル内に入力された値を項目名”メールアドレス”としてコンソールに表示する
    console.log("メールアドレス");
    console.log($("#email").val());

    // "password"ラベル内に入力された値を項目名”パスワード”としてコンソールに表示する
    console.log("パスワード");
    console.log($("#password").val());

    // "duplication__password"ラベル内に入力された値を項目名”確認用パスワード”としてコンソールに表示する
    console.log("確認用パスワード");
    console.log($("#duplication__password").val());

    // "address"ラベル内に入力された値を項目名”住所”としてコンソールに表示する
    console.log("住所");
    console.log($("#address").val());

    // "tel"ラベル内に入力された値を項目名”電話番号”としてコンソールに表示する
    console.log("電話番号");
    console.log($("#tel").val());

    // "subscription"ラベル内で選択された項目を項目名”購読情報”としてコンソールに表示する
    // valメソッドは取得した要素の最初の一つの値のみ取り出すのでeachメソッドを使用）
    console.log("購読情報");
    $('[name="subscription"]:checked').each(function(){
      console.log($(this).val());
    });
  });
});