/**
 *
 *嘉里
 * Created by huaBin on 2016/8/30.
 */
$(function() {
    $("#dowebok").fullpage({
        scrollingSpeed: 400,
        anchors: ["banner", "section1", "section2", "section3", "section4", "footer"/*,"section5"*/],
        afterRender:function(){
            var a = $("a"),c=$(".close");
            a.click(function () {
                var id= $(this).attr("data-id");
                var id2=$(this).attr("link");
                if(id){
                    $(".msk").show();
                    $('#'+id).show();
                    $(".close").show();
                    $('.pop').animate({right: 0}, 300);
                    $.fn.fullpage.setAllowScrolling(false);
                }
                if(id2){
                    $(".pop_in").hide();
                    $('#'+id2).show();
                }
            });
            c.click(function(){
                $.fn.fullpage.setAllowScrolling(true);
                $('.pop').animate({right:"-100%"}, 200,function(){
                    $(".msk").hide();
                    $(".pop_in").hide();
                    $(".close").hide();
                });
            });
        },
        onLeave: function (index, nextIndex, direction) {
            if (index == 1) {
                $(".banner-i1").addClass("a-fadeoutB").removeClass("a-fadeinB");
                $(".banner-i2").addClass("a-fadeoutB").removeClass("a-fadeinB1");
                $(".banner-a").addClass("a-fadeoutB").removeClass("a-fadeinB2");
                $(".top").show()
            }
            if (index == 2) {
            }
            if (index == 3) {
            }
            if (index == 4) {
            }
            if (index == 5) {
            }
            if (index == 6) {
            }
            if (index == 7) {
            }
        },
        afterLoad: function (anchorLink, index) {
            if (index == 1) {
                $(".nav>ul>li").eq(0).addClass("active").siblings().removeClass("active");
                $(".nav>ul>li").eq(1).addClass("active").siblings().removeClass("active");
                $(".banner-i1").addClass("a-fadeinB").removeClass("a-fadeoutB");
                $(".banner-i2").addClass("a-fadeinB1").removeClass("a-fadeoutB");
                $(".banner-a").addClass("a-fadeinB2").removeClass("a-fadeoutB");
                $(".top").hide()
            }
            if (index == 2) {
                $(".nav>ul>li").eq(2).addClass("active").siblings().removeClass("active");
                $(".top").show();
            }
            if (index == 3) {
                $(".nav>ul>li").eq(3).addClass("active").siblings().removeClass("active")
            }
            if (index == 4) {
                $(".nav>ul>li").eq(4).addClass("active").siblings().removeClass("active");
                rPlay();
                lPlay();
            }
            if (index == 5) {
                $(".nav>ul>li").eq(5).addClass("active").siblings().removeClass("active")
            }
            if (index == 6) {
                $(".nav>ul>li").eq(6).addClass("active").siblings().removeClass("active")
            }
            if (index == 7) {
                $(".nav>ul>li").eq(7).addClass("active").siblings().removeClass("active")
            }
        }
    });
/*
    function n(id, num, t, m) {
        var a = 0;
        $(id).text(a);
        var time = Math.floor(100 / num);
        var f = setInterval(numRun, time);

        function numRun() {
            if (a < num) {
                $(id).text(a);
                a = a + t;
            } else {
                clearInterval(f);
                $(id).text(m);
            }
        }
    }
*/

    var wul = $(".w_ul"), wli = $(".w_li"), iul = $(".in_ul"), ili = $(".in_ul li"), al = $(".left"), ar = $(".right");
    var iul1 = $(".in_ul1"), iul2 = $(".in_ul2"), iul3 = $(".in_ul3"), iul4 = $(".in_ul4");
    var i = wli.length, w = parseInt(wli.css("width").slice(0, -2));
    var spl = $(".left span"), spr = $(".right span"), p = $(".s3_p"), lb = $(".left .bj"), rb = $(".right .bj");
    wul.css({"width": i * w + "px", "left": -w + "px"});
    var uw = parseInt(wul.css("width").slice(0, -2));
    function rPlay() {
        ar.click(function () {
            al.show();
            var l = parseInt(wul.css("left").slice(0, -2));
            if (l % w == 0) {
                wul.animate({"left": (l - w) + "px"}, 200);
                if (l == -(uw - w * 2)) {
                    ar.hide();
                    /*wul.animate({"left":-(uw-w)+"px"});
                     p.text("生活方式");spl.text("精品商业");spr.text("");
                     lb.css("background-image","url(images/4_03.jpg)");
                     rb.css("background-image","url(images/4_01.jpg)");*/
                }
                switch (l) {
                    case 0:
                        p.text("活力商务");
                        spl.text("精品公寓");
                        spr.text("公园商业");
                        lb.css("background-image", "url(images/55_03.png)");
                        rb.css("background-image", "url(images/52_03.png)");
                        break;
                    case -w:
                        p.text("公园商业");
                        spl.text("活力商务");
                        spr.text("生活方式");
                        lb.css("background-image", "url(images/58_07.jpg)");
                        rb.css("background-image", "url(images/56_03.png)");
                        break;
                    case -w * 2:
                        p.text("生活方式");
                        spl.text("公园商业");
                        spr.text("");
                        lb.css("background-image", "url(images/52_03.png)");
                        break;
                }
            }
        })
    }
    function lPlay() {
        al.click(function () {
            ar.show();
            var l = parseInt(wul.css("left").slice(0, -2));
            if (l % w == 0) {
                wul.animate({"left": (l + w) + "px"}, 200);
                if (l == -w) {
                    al.hide();
                    /* wul.animate({"left":0+"px"});
                     p.text("有机社区");spl.text("");spr.text("臻至商务");
                     lb.css("background-image","url(images/4_04.jpg)");
                     rb.css("background-image","url(images/4_04.jpg)");*/
                }
                switch (l) {
                    case -w:
                        p.text("精品公寓");
                        spl.text("");
                        spr.text("活力商务");
                        rb.css("background-image", "url(images/58_07.jpg)");
                        break;
                    case -w * 2:
                        p.text("活力商务");
                        spl.text("精品公寓");
                        spr.text("公园商业");
                        lb.css("background-image", "url(images/55_03.png)");
                        rb.css("background-image", "url(images/52_03.png)");
                        break;
                    case -w * 3:
                        p.text("公园商业");
                        spl.text("活力商务");
                        spr.text("生活方式");
                        lb.css("background-image", "url(images/58_07.jpg)");
                        rb.css("background-image", "url(images/56_03.png)");
                        break;
                }
            }
        })
    }

    var j = 0,j1= 0,j2= 0,j3=0;
    function iP() {
        var _i =iul1.find("li").length;
        iul1.find("li").eq(j).animate({opacity: 1}, 1000).siblings("li").animate({opacity: 0}, 1000);
        j=j>=_i?0:j+1;
    }
    function iP1() {
        var _i =iul2.find("li").length;
        iul2.find("li").eq(j1).animate({opacity: 1}, 1000).siblings("li").animate({opacity: 0}, 1000);
        j1=j1>=_i?0:j1+1;
    }
    function iP2() {
        var _i =iul3.find("li").length;
        iul3.find("li").eq(j2).animate({opacity: 1}, 1000).siblings("li").animate({opacity: 0}, 1000);
        j2=j2>=_i?0:j2+1;
    }
    function iP3() {
        var _i =iul4.find("li").length;
        iul4.find("li").eq(j3).animate({opacity: 1}, 1000).siblings("li").animate({opacity: 0}, 1000);
        j3=j3>=_i?0:j3+1;
    }
    setInterval(iP, 3000);
    setInterval(iP1, 3000);
    setInterval(iP2, 3000);
    setInterval(iP3, 3000);

        var s1_ul = $(".section1 .s1_wrap .s4-list"),s1_ul1 = $(".section4 .s1_wrap .s4-list"), s1_li = $(".s4-list li"),s1_li1 = $(".section4 .s4-list li"), s1_l = $(".section1 .s1_left"), s1_r = $(".section1 .s1_right"), s1_l1 = $(".section4 .s1_left"), s1_r1 = $(".section4 .s1_right");
        var pl = parseInt(s1_li.css("width").slice(0, -2)) + parseInt(s1_li.css("margin-right").slice(0, -2));
    s1_ul.css("width",parseInt(s1_li.css("width").slice(0, -2))*3+parseInt(s1_li.css("margin-right").slice(0, -2))*2+"px");
    s1_ul1.css("width",parseInt(s1_li.css("width").slice(0, -2))*2+parseInt(s1_li1.css("margin-right").slice(0, -2))+"px");
    function s1Play() {
        var s1l = parseInt(s1_ul.css("left").slice(0, -2));
        if (s1l == 0) {
            s1_rP()
        } else {
            s1_lP()
        }
    }

/*
    s1Hover(s1_l);
    s1Hover(s1_r);
    s1Hover(s1_li);
    function s1Hover(b) {
        b.hover(function () {
            clearInterval(s1P)
        }, function () {
            s1P = setInterval(s1Play, 5000);
        });
    }
*/

    s1_l.click(function () {
        if($(window).width()>=500){
            s1_lP()
        }else{
            s1_lP1()
        }
    });
    s1_r.click(function () {
        if($(window).width()>=500){
            s1_rP()
        }else{
            s1_rP1()
        }
    });
    s1_l1.click(function () {
        s1_lP4()
    });
    s1_r1.click(function () {
        s1_rP4()
    });

    function s1_lP() {
        s1_ul.animate({"left":0}, 300);
        s1_l.hide();
        s1_r.show();
    }
    function s1_rP() {
        s1_ul.animate({"left":-pl + "px"}, 300);
        s1_r.hide();
        s1_l.show();
    }

    function s1_lP1() {
        var s1l = parseInt(s1_ul.css("left").slice(0, -2));
        s1_ul.animate({"left": s1l+pl+"px"}, 300);
        if(s1l==-pl){
            s1_l.hide();
        }
        s1_r.show();
    }
    function s1_rP1() {
        var s1l = parseInt(s1_ul.css("left").slice(0, -2));
        s1_ul.animate({"left": s1l-pl + "px"}, 300);
        if(s1l==-pl){
            s1_r.hide();
        }
        s1_l.show();
    }
    function s1_lP4() {
        s1_ul1.animate({"left": 0+"px"}, 300);
        s1_l1.hide();
        s1_r1.show();
    }
    function s1_rP4() {
        s1_ul1.animate({"left": -pl + "px"}, 300);
        s1_r1.hide();
        s1_l1.show();
    }


    $(".pop .wrap").css("height", $(window).height() - 62 + "px");
    $(".menu").toggle(function(){
        $(".nav").animate({"left":0},200);
        $(this).animate({left:"120px"},200)
    },function(){
        $(".nav").animate({"left":"-100px"},200);
        $(this).animate({left:"20px"},200)
    });
    if($(window).width()<769){
        $(".section1 .p").text("前海，享有创新的机制与优越的国家政策优势，着眼于发展国际化金融、高新科技及信息服务等创新行业，投资贸易环境自由便利。集中规划公共、开放、多元、安全的都市活力空间，打造水安全、水生态和水文化的“前海水城”。商潮云涌，集大成必将成大势。");
        $(".section4 .p").text("品质是建筑的灵魂，嘉里建设每个项目的出品都有口皆碑，前海嘉里中心更是每一处细节、每一道工艺都反复打磨，力臻完美。引入绿意的办公及公寓大堂、高标准的施工质量，配套精致智能化家居的高端公寓。细节尽显匠心，为客户提供极致舒适的商务、生活及休闲空间。");
        var s1P = setInterval(s1Play, 5000);
    }
    if($(window).width()<500){
        $(".section1 .p").text("前海，享有创新的机制与优越的国家政策优势，着眼于发展国际化金融、高新科技及信息服务等创新行业，投资贸易环境自由便利。");
        $(".section4 .p").text("品质是建筑的灵魂，嘉里建设每个项目的出品都有口皆碑，前海嘉里中心更是每一处细节、每一道工艺都反复打磨，力臻完美。");

        $(".section3 .p").text("前海嘉里中心，把办公、居住及商业等功能通过自然景观和园林广场等元素有机融合在一起，缔造自然、人文、艺术及建筑为一体的办公居住休闲社区。");
        clearInterval(s1P);
        $(".title .zz").click(function(){
            $(this).next().slideToggle();
        });
        $(".title ul li").click(function(){
            $(this).parent().hide()
        })
    }
});