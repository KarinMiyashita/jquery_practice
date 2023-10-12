$(function(){
  // .select-box要素の中身が変更された時にイベントを実行する
  $(".select-box").on("change",function(){
    // .select-boxの変更された値を変数boxに格納する
    var box = $(this).val();
    // .food-list内の全てのリストを変数foodListに格納する
    var foodList = $(".food-list li");
    // all（全て）を選択した時、.food-list内の全てのリスト項目が表示される
    "all" === box ? foodList.show() :
    // それ以外の場合以下の処理を行う
    // 変数foodListに対して反復処理を行う
    $.each(foodList, function (index, item) {
      // リストアイテムからdata-category-type属性の値を取得し、変数categoryに格納する
       var category = $(item).data("category-type");
      // 変数box（select-boxで選ばれた値）と変数category（data-category-type属性の値）を比べて
      // 一致する場合は表示し、一致しない場合は非表示にする
      box === category ? $(item).show() : $(item).hide()
    })
  })
});