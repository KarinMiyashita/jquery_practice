$(function(){
  // .dropdwn内のリストをイベント対象にし、マウスホバー時に
  $(".dropdwn li").hover(
    // ulの直下の子要素を下にスライドしながら表示する（マウスが離れた時、アニメーションを中断する）
    function(){
    $(this).children("ul").stop().slideDown()
    },
    // ulの直下の子要素を上にスライドしながら非表示にする（マウスが離れた時、アニメーションを中断する）
    function(){
    $(this).children("ul").stop().slideUp()
    }
  );
});