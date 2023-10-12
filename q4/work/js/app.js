$(function(){
  // nav要素のリストをクリックした時
  $(".nav li").on('click', function () {
    // 何番目のメニューがクリックされたのか、番号を取得する
    var index = $(".nav li").index(this);
    // .descriptionのリストに"is-hidden"というクラス属性を追加する（→全てのリスト項目が非表示になる）
    $(".description li").addClass("is-hidden");
    // eq()で変数indexの値に対応するリストを取得し、"is-hidden"というclass属性を削除（→選択された項目のみ表示される）
    $(".description li").eq(index).removeClass("is-hidden");
    }
  );
});