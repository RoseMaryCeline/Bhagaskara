$(function(){
//1-scroller menu main on purple bakground
  var about=$("#aboutMenu");
  var team=$("#teamMenu");
  var skill=$("#skillMenu");
  var portfolio=$("#portfolioMenu");
  var blog=$("#blogMenu");
  var contact=$("#contactMenu");

  var sectionAbout=$("#aboutUs");
  var sectionTeam=$("#ourTeam");
  var sectionskills=$("#ourSkills");
  var sectionPortfolio=$("#ourPortfolio");
  var sectionBlog=$("#ourBlog");
  var sectionContact=$("#contactUs");

  about.on("click", function(event){
    $('html, body').animate({
      scrollTop: sectionAbout.offset().top
    }, 3000);
  });
   team.on("click", function(event){
     $('html, body').animate({
       scrollTop: sectionTeam.offset().top
     }, 3000);
   });
   skill.on("click", function(event){
     $('html, body').animate({
       scrollTop: sectionskills.offset().top
     },3000);
   });
    portfolio.on("click", function(event){
      $('html, body').animate({
        scrollTop: sectionPortfolio.offset().top
      }, 3000);
    });
    blog.on("click", function(event){
      $('html, body').animate({
        scrollTop: sectionBlog.offset().top
      }, 3000);
    });
    contact.on("click", function(event){
      $('html, body').animate({
        scrollTop: sectionContact.offset().top
      }, 3000);
    });

    //scrollerdown to home section
    var scroller=$("#scrollerDown");
    var sectionHome=$("#home");

    scroller.on("click", function(event){
      $('html, body').animate({
        scrollTop: sectionHome.offset().top
      }, 3000);
    });
//2-hamburger menu
  var hideMenu=$(".hideMenu");
  var menu=$(".menu");

    hideMenu.on("click", function () {
      menu.toggleClass("visible");
    });

//3-slider
  var slider=$(".slider");
  var one=$(".members");
  var oneWidth=$(".members").width();
  var ulHandler=$(".slider").find('ul');
  ulHandler.width(oneWidth*one.length);

  var leftArrow=$("#leftArrow");
  var rightArrow=$("#rightArrow");

    leftArrow.on("click", function(event){
       var lastLi=one.last();
       var lo = lastLi.offset().left;
       var sliderOffsetRight=slider.offset().left+slider.width();
      if(lo-sliderOffsetRight>=0){
        ulHandler.animate({
          left: "-=" + oneWidth
        }, 1000);
      }
    });
    rightArrow.on("click", function(event){
       var firstLi=one.first();
       var ofFirstLi=firstLi.offset().left;
       var sliderOffsetLeft=slider.offset().left;
      if(ofFirstLi - sliderOffsetLeft < 0){
        ulHandler.animate({
          left:"+=" + oneWidth
        },1000);
      }
    });

  $(window).resize(function(){
    countSliderEl();
  });
  countSliderEl();

  function countSliderEl(){
    var wrapperWidth=$('.wrapper').width();
    var counterImages=Math.floor(wrapperWidth/oneWidth);

    counterImages = counterImages === 0 ? 1 :counterImages;
    slider.width(oneWidth*counterImages);
  }

//4-progressbar
  var progress=$(".progress-bar");
  var sectionSkills = $(".skills").offset().top;

  $(document).on("scroll", function(){
      var scrollTop = $(window).scrollTop();
      if(sectionSkills < scrollTop) {
        progress.addClass("animate");
      }
  });

//5-gallery with filter
    var btn_all=$(".btn-1");
    var btn_web=$(".btn-2");
    var btn_app=$(".btn-3");
    var btn_icon=$(".btn-4");
    var allPicture=$(".picture-1");

    btn_all.on("click", function(event){
      allPicture.slideDown();
    });
    btn_web.on("click", function(event){
      allPicture.each(function(){
        var currEl=$(this);
        if(this.dataset.tag.indexOf('web')=== -1){
          currEl.slideUp();
        }
        else{
          allPicture.show();
        }
      });
    });
    btn_app.on("click", function(event){
      allPicture.each(function(event){
        var currEl=$(this);
        if(this.dataset.tag.indexOf('app')=== -1){
          currEl.slideUp();
        }
        else{
          allPicture.show();
        }
      });
    });
    btn_icon.on("click", function(event){
      allPicture.each(function(){
        var currEl=$(this);
        if(this.dataset.tag.indexOf('icon')===-1){
          currEl.slideUp();
        }
        else{
          allPicture.show();
        }
      });
    });
});
