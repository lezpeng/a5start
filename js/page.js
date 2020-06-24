$(function() {
  //顶部下拉菜单
  $(".back-item").hover(function() {
    $(this).children(".back-home-hide").show();
  }, function() {
    $(this).children(".back-home-hide").hide();
  });

  //首页幻灯
  var swiper1 = new Swiper('#swiper1', {
    pagination: {
      el: '.swiper-pagination',
      bulletClass: 'my-bullet'
    },
    autoplay: true, //可选选项，自动滑动
    loop: true,
  });

  //频道幻灯
  var swiper1 = new Swiper('#swiper3', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    autoplay: false, //可选选项，自动滑动
    loop: true,
  });

  //当点击跳转链接后，回到页面顶部位置
  $("#toTop").click(function() {
    $('body,html').animate({ scrollTop: 0 }, 500);
    return false;
  });

  //友情链接选项卡
  // var $menu = $('.links> .links-menu ul li');
  // $menu.mouseover(function() {
  //   $(this).addClass('selected').siblings().removeClass('selected');
  //   var index = $menu.index(this);
  //   $('.links-content > .links-wrap').eq(index).show().siblings().hide();
  // });

  function tabs(parent, children) {
    var $menu = parent;
    $menu.mouseover(function() {
      $(this).addClass('selected').siblings().removeClass('selected');
      var index = $menu.index(this);
      children.eq(index).show().siblings().hide();
    });
  }

  tabs($('.links-menu ul li'), $('.links-wrap'));
  tabs($('.reading ul li'), $('.reading-wrap'));
  tabs($('.market ul li'), $('.market-wrap'));

  //截取文章列表摘要字数
  var cname = $(".article-info > dl > dd");
  for (var i = 0; i < cname.length; i++) {　　　　　　
    var nowLength = cname[i].innerHTML.length;
    if (nowLength > 60) {
      cname[i].innerHTML = cname[i].innerHTML.substr(0, 60) + '...';
    }　　　　　　
  }　

})