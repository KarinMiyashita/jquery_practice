$(function () {
  // q1をイベント対象にし、cssのcolorを緑色に変更
  $("#q1").css('color',"green");

  // q2をイベント対象にし、変数にthisを代入　クリックされた時、cssのbackgroundをpinkに変更
  // （thisはクリックされたq2のボタンを表す）
  $("#q2").on('click',function(){
    $(this).css('background',"pink");
    }
  );

  // q3をイベント対象にし、変数にthisを代入　クリックされた時、３秒かけてフェードアウト
  // （thisはクリックされたq3のボタンを表す）
  $("#q3").on('click',function(){
    $(this).fadeOut(3000);
    }
  );

  // q4をイベント対象にし、変数にthisを代入　クリックされた時、.largeというclass属性を追加
  // （thisはクリックされたq4のボタンを表す）
  $("#q4").on('click',function(){
    $(this).addClass("large");
    }
  );

  // q5をイベント対象にし、変数にthisを代入
  // （thisはクリックされたq5のボタンを表す）
  $("#q5").on('click',function(){
    $(this)
    //  クリックされた時、q5の先頭にテキストを挿入
    .prepend("DOMの中の前")
    //  クリックされた時、q5の末尾にテキストを挿入
    .append("DOMの中の後")
    //  クリックされた時、q5の前（要素外）にテキストを挿入
    .before("DOMの前")
    //  クリックされた時、q5の後（要素外）にテキストを挿入
    .after("DOMの後")
    }
  );

  // q6をイベント対象にし、変数にthisを代入
  // クリックされた時、上に100、左に100のマージンを取ることで、右下に動くアニメーションになる
  // （thisはクリックされたq6のボタンを表す）
  $("#q6").on('click',function(){
    $(this).animate({"margin-top" : 100, "margin-left" : 100,} , 2000);
    }
  );

  // q7をイベント対象にし、変数にconsole.logを代入 コンソールに出力する値にthisを設定
  // （thisはクリックされたq7のボタンを表す）
  $("#q7").on('click',function(){
    console.log(this)
    }
  );

  // q8をイベント対象にし、変数にthisを代入
  // （thisはクリックされたq8のボタンを表す）
  $("#q8").on({
    // マウスがボタンに乗っている時、.largeというclass属性を追加
    'mouseenter':function(){
    $(this).addClass("large");
    },
    // マウスがボタンから離れた時、.largeというclass属性を削除
    'mouseleave':function(){
    $(this).removeClass("large");
    }
    }
  );

  // q9のリストをイベント対象にし、変数にthisを代入
  // （thisはクリックされたq9のボタンを表す）
  $("#q9 li").on('click',function(){
    // index()でクリックした時に何番目に位置するかを取得し、alert()でアラートボックスに結果を表示
    var index = $(this).index(); alert(index)
    }
  );

  // q10のリストをイベント対象にし、変数にthisを代入
  // （thisはクリックされたq9のボタンを表す）
  $("#q10 li").on('click',function(){
    // index()でクリックした時に何番目に位置するかを取得
    var index = $(this).index();
    // 変数にconsole.logを代入 コンソールに出力する値にq11のリストを設定
    // eq()で変数indexの値に対応するリストを取得
    console.log($("#q11 li").eq(index));
    // q11のリストをイベント対象にし、eq()で変数indexの値に対応するリストを取得
    // q10のボタンがクリックされた時、.large-textというclass属性を追加
    $("#q11 li").eq(index).addClass("large-text")
    }
  );

});