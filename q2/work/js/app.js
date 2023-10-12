$(function () {
// .modal_open_buttonというclass属性をイベント対象にし、クリックしたら
$(".modal_open_button").on('click',function(){
  // .modal_winをフェードインさせる
  $(".modal_win").fadeIn();
  });
// .modal_close_buttonというclass属性をイベント対象にし、クリックしたら
$(".modal_close_button").on('click',function(){
  // .modal_winをフェードアウトさせる
  $(".modal_win").fadeOut();
  });
})