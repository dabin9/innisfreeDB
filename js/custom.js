$(function () {
    //top btn scroll
    $('.top_btn').click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $('.top_btn').removeClass('on');
    })

    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 1500) {
            $('.top_btn').addClass('on');
        } else {
            $('.top_btn').removeClass('on');
        }
    })

    //submenu 아코디언슬라이드
    $('.debth_door').click(function () {
        h = $(this).siblings('.sub').find('ul').height() + 100;

        if ($(this).siblings('.sub').height() > 0) {
            $('.sub').stop().animate({ height: 0 }, 500);
        } else {
            $('.sub').stop().animate({ height: 0 }, 500);
            $(this).siblings('.sub').stop().animate({ height: h }, 500);
        }
    });

    document.querySelector('.menu').addEventListener('click', function () {
        //alert('menuAnimation준비완료')
        this.classList.toggle('active');
    })

    $('#gnb').on('click', function () {
        $('.sub_toggle').toggle();
    })
    $('.menu').click(function () {
        if ($('body').hasClass('on')) {
            $('body').removeClass('on');

        } else {
            $('body').addClass('on');
        }
    })


    // //main_vis 캐러셀 slide 
    $('.main_page01').click(function () {
        //console.log('mainVisSlide준비완료')
        $('.main-slide-container').css('left', '0vw');
    })
    $('.main_page02').click(function () {
        //console.log('maWinVisSlide준비완료')
        $('.main-slide-container').css('left', '-100vw');
    })
    $('.main_page03').click(function () {
        //console.log('mainVisSlide준비완료')
        $('.main-slide-container').css('left', '-200vw');
    })

    var num = 0;
    var banner = setInterval(function () {
        if (num == 0) {
            $('.main_page01').click();
            console.log("wda");
            $('.circlerr.cir01').addClass('on');
            $('.circlerr.cir03').removeClass('on');
            num++;
        } else if (num == 1) {
            $('.main_page02').click();
            $('.circlerr.cir01').removeClass('on');
            $('.circlerr.cir02').addClass('on');
            num++;
        } else if (num == 2) {
            $('.main_page03').click();
            $('.circlerr.cir02').removeClass('on');
            $('.circlerr.cir03').addClass('on');
            num = 0;
        }
    }, 5000)



    $('.stop').click(function () {
        //alert('stop')
        $('.play').css('display', 'inline-block');
        $('.stop').css('display', 'none');
        clearInterval(banner);
    })

    $('.play').click(function () {
        //alert('stop')
        $('.stop').css('display', 'inline-block');
        $('.play').css('display', 'none');
        banner = setInterval(function () {
            if (num == 0) {
                $('.main_page01').click();
                console.log("wda");
                $('.circlerr.cir01').addClass('on');
                $('.circlerr.cir03').removeClass('on');
                num++;
            } else if (num == 1) {
                $('.main_page02').click();
                $('.circlerr.cir01').removeClass('on');
                $('.circlerr.cir02').addClass('on');
                num++;
            } else if (num == 2) {
                $('.main_page03').click();
                $('.circlerr.cir02').removeClass('on');
                $('.circlerr.cir03').addClass('on');
                num = 0;
            }
        }, 3000)
    })

    //event 캐러셀 슬라이드

    var eventView = 1;

    $('.event_m-right').click(function () {
        if (eventView == 1) {
            $('.event_m .slide-container').css('left', '-100vw');
            eventView = 2;
        } else if (eventView == 2) {
            $('.event_m .slide-container').css('left', '-200vw');
            eventView = 3;
        } else if (eventView == 3) {
            $('.event_m .slide-container').css('left', '0vw');
            eventView = 1;
        }
    })

    $('.event_m-left').click(function () {
        if (eventView == 1) {
            $('.event_m .slide-container').css('left', '-200vw');
            eventView = 2;
        } else if (eventView == 2) {
            $('.event_m .slide-container').css('left', '-100vw');
            eventView = 3;
        } else if (eventView == 3) {
            $('.event_m .slide-container').css('left', '0vw');
            eventView = 1;
        }
    })



    //prd slide
    var swiper = new Swiper(".prd_slide", {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            clickable: true,
        },
        navigation: {
            nextEl: ".prd_next",
            prevEl: ".prd_prev",
        },
        breakpoints: {
            270: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
            500: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            1300: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },
    });

    //review_slide
    var swiper = new Swiper(".review_slide", {
        slidesPerView: 4,
        spaceBetween: 50,
        navigation: {
            nextEl: ".re_next",
            prevEl: ".re_prev",
        },
        breakpoints: {
            270: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
            500: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            1300: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },
    });

    //event hover
    for (let i = 0; i < $('.event_area span').length; i++) {
        $('.event_area span').eq(i).hover(function () {
            //alert('event hover준비완료')
            $('.event_area span').removeClass('on');
            $('.event_area span').eq(i).addClass('on');
        });
    }



    for (let i = 0; i < $('.event').length; i++) {
        $('.event').eq(i).hover(function () {
            //alert('event hover준비완료')
            $('.con').removeClass('on');
            $('.con').eq(i).addClass('on');
        });
    }


    //sns_area

    for (let i = 0; i < $('.sns_area li').length; i++) {
        $('.sns_area li').eq(i).hover(function () {
            //alert('sns-hover준비완료')
            $('.conbox').eq(i).css('display', 'none');
            $('.sns-hover').eq(i).css('display', 'block');
        }).mouseleave(function () {
            $('.conbox').eq(i).css('display', 'block');
            $('.sns-hover').eq(i).css('display', 'none');
        });
    }


    //header scroll

    $(window).on('scroll', function () {
        //alert('스크롤준비완료')
        if ($(window).scrollTop() < 100) {
            $('.black').css('display', 'none');
            $('.white').css('display', 'block');
            $('.user_nav li a').css('color', 'white');
            $('.menu span').css('background-color', 'white');

        } else if ($(window).scrollTop() > 100) {
            $('.white').css('display', 'none');
            $('.black').css('display', 'block');
            $('.user_nav li a').css('color', '#4a4948');
            $('.menu span').css('background-color', '#4a4948');
        }
    })



    //만약 스크롤탑이 풋터보다 작으면
    //sns_area display: none
    //스크롤탑이 풋터보다 크면
    //sns_area display: block
    $(window).on('scroll', function () {
        if ($(window).scrollTop() < $('footer').offset().top - 500) {
            $('.sns_area').css('display', 'block');
        } else if ($(window).scrollTop() > $('footer').offset().top - 500) {
            $('.sns_area').css('display', 'none');
        }
    })




    // prd hover

    $('#a').mouseenter(function () {
        //alert('준비완료');
        $('.prd_user_nav').eq(0).addClass('on');
        $('.prd_user_nav').eq(1).addClass('on');
    }).mouseleave(function () {
        $('.prd_user_nav').eq(0).removeClass('on');
        $('.prd_user_nav').eq(1).removeClass('on');
    });
    $('#b').mouseenter(function () {
        //alert('준비완료');
        $('.prd_user_nav').eq(2).addClass('on');
        $('.prd_user_nav').eq(3).addClass('on');
    }).mouseleave(function () {
        $('.prd_user_nav').eq(2).removeClass('on');
        $('.prd_user_nav').eq(3).removeClass('on');
    });
    $('#c').mouseenter(function () {
        //alert('준비완료');
        $('.prd_user_nav').eq(4).addClass('on');
        $('.prd_user_nav').eq(5).addClass('on');
    }).mouseleave(function () {
        $('.prd_user_nav').eq(4).removeClass('on');
        $('.prd_user_nav').eq(5).removeClass('on');
    });
    $('#d').mouseenter(function () {
        //alert('준비완료');
        $('.prd_user_nav').eq(6).addClass('on');
        $('.prd_user_nav').eq(7).addClass('on');
    }).mouseleave(function () {
        $('.prd_user_nav').eq(6).removeClass('on');
        $('.prd_user_nav').eq(7).removeClass('on');
    });
    $('#e').mouseenter(function () {
        //alert('준비완료');
        $('.prd_user_nav').eq(8).addClass('on');
        $('.prd_user_nav').eq(9).addClass('on');
    }).mouseleave(function () {
        $('.prd_user_nav').eq(8).removeClass('on');
        $('.prd_user_nav').eq(9).removeClass('on');
    });
    $('#f').mouseenter(function () {
        //alert('준비완료');
        $('.prd_user_nav').eq(10).addClass('on');
        $('.prd_user_nav').eq(11).addClass('on');
    }).mouseleave(function () {
        $('.prd_user_nav').eq(10).removeClass('on');
        $('.prd_user_nav').eq(11).removeClass('on');
    })






    //event circle

    const text = document.querySelector('.text p');
    text.innerHTML = text.innerText.split("").map(
        (char, i) =>
            `<span style="transform:rotate(${i * 14.2}deg)">${char}</span>`

    ).join("")





})






































































































