$(function () {
  // .drawer_buttonというclass属性をイベント対象にし、クリックした時に
  $(".drawer_button").on('click',function(){
    // クリックされたボタン（this）の.activeの追加・削除を切り替える
    $(this).toggleClass("active");
    // nav要素のopenクラスの追加・削除を切り替えることでナビゲーションメニューの表示・非表示が切り替わる
    $("nav").toggleClass("open")
    // .drawer_bgの表示をフェードイン・フェードアウトで切り替える
    $(".drawer_bg").fadeToggle();
    }
  );
  // .drawer_bgというclass属性をイベント対象にし、クリックした時に
  $(".drawer_bg").click(function (){
    // クリックされた背景要素（this）を非表示にする
    $(this).hide();
    // .drawer_buttonからactiveクラスを削除する
    $(".drawer_button").removeClass("active");
    // nav要素のopenクラスを削除することで、メニューが非表示になる
    $("nav").removeClass("open");
    }
  );
});