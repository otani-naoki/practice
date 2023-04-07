

//----ヘッダーのスクロール時の透明解除---------------------------------------------------
$(function() {

  //スクロールしてページトップから50に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 100) {
      $('.header-contents').addClass('header-backGround-active');
    }else{
      $('.header-contents').removeClass('header-backGround-active');
    }
  });

});






//---メイン中部3の画像のスクロール時のフェードイン・アウト--------------------------------

$(function(){
  $(window).scroll(function (){
    $(".fadeOut").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fadeIn-down");
      } else {
        $(this).removeClass("fadeIn-down");
      }
    });
  });
});






//----TOPへ戻るボタンのスクロール時の表示-----------------------------------------------

$(function() {

  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 100) {
      $('.button').addClass('active');
    }else{
      $('.button').removeClass('active');
    }
  });

});


//----モーダルウィンドウ-----------------------------------------------------------------

$(function() {
  
    // モーダルウィンドウを開くとき
    $('.header-contents-navList5').on(
      'click', function() {
      $('.modal, .over-lay').addClass('active');
    });
    
    // モーダルウィンドウを閉じるとき
    $('.over-lay').on(
      'click', function() {
      $('.modal, .over-lay').removeClass('active');
    });
  });