$(document).ready(function(){

    var bit_two = {
        textcounter: 0,
        imagecounter: 1,
        graphicAnim: true,
        developAnim: false,
        changeTrigger: false,
        currentpage: 'home',
        hashChange : function() {

            switch(window.location.hash) {

                case "#hello":
                    $('html, body').animate({scrollTop: $('.hello').offset().top });
                break;
                case "#ux":
                    $('html, body').animate({scrollTop: $('.ux').offset().top });
                break;
                case "#graphic":
                    $('html, body').animate({scrollTop: $('.graphic').offset().top });
                break;
                case "#development":
                    $('html, body').animate({scrollTop: $('.development').offset().top });
                break;
                case "#motion":
                    $('html, body').animate({scrollTop: $('.motion').offset().top });
                break;
                case "#contact":
                    $('html, body').animate({scrollTop: $('.contact').offset().top });
                break;
                default:
                    $('html, body').animate({scrollTop: $('.hello').offset().top });
                break;
            }
        },
        addListeners : function() {
            $('.nav li a').click(function(e){
                setTimeout(function(){
                    bit_two.hashChange();
                }, 100);
            });

            $('.projects').click(function(e){
                $('.slideshow').addClass('move');
            });

            $('.development-nav li').click(function(e){
                var index = $(this).index();

                $('.development .container .row').hide();
            })

            $('.view-projects').click(function(){
                bit_two.swapImages($('.opener'), $('.puma-sketch'));
            });
            $('.ux-return').click(function(){
                bit_two.swapImages($('.puma-sketch'), $('.opener'));
            });
            $('.panel-btn').click(function(){
                var targetstring = '" +'
                var target = document.getElementsByClassName('puma-wireframe')[0];
                console.dir(target);
                bit_two.swapImages($('.puma-sketch'), target);
            });
        },
        webscroll : function() {
            if(!bit_two.developAnim) {

                setInterval(function(){

                    if (bit_two.imagecounter == 6) {
                        $('.strip').css({'left':'0px'});
                        bit_two.imagecounter = 1;
                    };
                    $('.strip').animate({left: "-=462"}, 500);
                    bit_two.imagecounter++;
                }, 3000);
                bit_two.developAnim = true;
            }

        },
        changePage: function(index) {
            $('.graphic, .diagonal-box').removeClass('show').addClass('hide');

            switch(index) {
                case 0:
                    // Hello section
                    
                break;
                case 1:
                    // UX section

                    $('.development-bg').addClass('expand show').removeClass('grey');
                    //$('.puma').addClass('show');
                break;
                case 2:
                    // Development section

                    //bit_two.webscroll();

                    $('.development-bg').addClass('grey expand show').removeClass('blue');
                break;
                case 3:
                    // Graphic section

                     bit_two.graphicAnim ? $('.graphic, .diagonal-box').addClass('animate') : $('.graphic, .diagonal-box').addClass('show');

                    bit_two.graphicAnim = false;
                    
                    $('.development-bg').addClass('blue expand show').removeClass('grey gold');
                break;
                case 4:
                    // Motion section

                    $('.development-bg').addClass('gold expand show');
                    $('.development-bg').removeClass('rotate');
                break;
                case 5:
                    // Contact section

                    $('.development-bg').addClass('rotate expand show');
                break;
            }

        },
        scrollWatch: function(scrolled) {

            switch(bit_two.currentpage) {
                    case 'home':
                        if (scrolled < 850) {
                            bit_two.changePage(0);
                        }
                        if (scrolled > 850 && scrolled < 2100) {

                            bit_two.changePage(1);
                        }
                        if (scrolled > 2100 && scrolled < 3500) {
                            bit_two.changePage(2);
                        }
                        if (scrolled > 3500 && scrolled < 4500) {
                            bit_two.changePage(3);
                        }
                        if (scrolled > 4500 && scrolled < 5800) {
                            bit_two.changePage(4);
                        }
                        if (scrolled > 5800) {
                            bit_two.changePage(5);
                        }
                    break;
                    case 'development':
                        if (scrolled < 850) {
                            console.log('devel 1');
                        }
                        if (scrolled > 850 && scrolled < 2100) {
                            console.log('devel 2');
                        }
                        if (scrolled > 2100 && scrolled < 3500) {
                            console.log('devel 3');
                        }
                        if (scrolled > 3500 && scrolled < 4500) {
                            console.log('devel 4');
                        }
                        if (scrolled > 4500) {
                            console.log('devel 5');
                        }
                    break;
                }
        },
        swapImages : function(targetout, targetin) {
            $(targetin).removeClass('moveout').addClass('movein');
            $(targetout).addClass('moveout').removeClass('movein');
        },
        init : function() {

            $(window).bind('scroll',function(e){
                var scrolled = $(window).scrollTop();
                bit_two.scrollWatch(scrolled);
            });

            $('.bmw-mobile, .chlora-mobile').addClass('show');
            bit_two.addListeners();
        }
    }

bit_two.init();


});
