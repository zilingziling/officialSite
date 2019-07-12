import "../css/share.styl"
import "../css/swiper.min.css"
import Swiper from 'swiper'
import $ from 'jquery'
$(function () {
  let homePageSwiper=new Swiper('#swiper2',{
    direction:'horizontal',
    autoplay:true,
    speed:1000,
    loop:true,
    pagination:{
      el:'.swiper-pagination',
      bulletElement : 'span',
      clickable:true,
      bulletClass:'my-bullet',
      bulletActiveClass:'my-bullet-active'
    },
  });
  let tab=new Swiper('#swiper1',{
    direction:'horizontal',
    speed:1000,
  });
  $('.icon1').click(function(){
    $(".icon1").addClass("active");
    $(".icon2,.icon3").removeClass("active");
    tab.slideTo(0, 1000, false);//切换到第一个slide，速度为1秒
  });
  $('.icon2').click(function(){
    $(".icon2").addClass("active");
    $(".icon1,.icon3").removeClass("active");
    tab.slideTo(1, 1000, false);//切换到第一个slide，速度为1秒
  });
  $('.icon3').click(function(){
    $(".icon3").addClass("active");
    $(".icon2,.icon1").removeClass("active");
    tab.slideTo(2, 1000, false);//切换到第一个slide，速度为1秒
  })
});