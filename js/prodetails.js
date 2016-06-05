
;$(function(){
    /**
     * ///////////////////////////////////////放大镜下部small circleShowPic
     */
    $(".demo-leftbtn").on("click",function(){
        $(".demo-ulbox").find("ul").stop(true).animate({
            "left":"-90px"
        },500);
    });
    $(".demo-rightbtn").on("click",function(){
        $(".demo-ulbox").find("ul").stop(true).animate({
            "left":0
        },500)
    });

    /**
     * /////////////////////////////////////点击下部li，上部图片淡入淡出
     */
    var oLi=$(".demo-ulbox").find("ul").find("li");
    //var oImg=$("#small-box").find("img");
    //var oImgBig=$("#big-box").find("img");
    //var currIndex;
    //console.log(oLi.length);
    for(var i in oLi){
        oLi.eq(i).on("click",function(){
            var oImgSrc=$(this).find("img").attr('src');
            $("#small-box").find("img").attr("src",oImgSrc);
            $("#big-box").find("img").attr("src",oImgSrc);
            //oImg.eq(currIndex).stop(true).fadeIn(300).siblings().stop(true).fadeOut(300);
            //oImgBig.eq(currIndex).stop(true).show().siblings().stop(true).hide();
        })
    };

    /**
     * /////////////////////////////////////放大镜
     */
    function zoom(){
        var $smallBox = $("#small-box");
        var $floatBox = $("#float-box");
        var $bigBox = $("#big-box");
        var $img = $bigBox.find("img");
        $smallBox.hover(function(){
            //console.log(111)
            $floatBox.css("display","block");
            $bigBox.css("display","block");
            $bigBox.stop().animate({
                "left":"540px",
                "top":0,
                "width":"480px",
                "height":"480px"
            },500);
        },function(){
            $floatBox.css("display","none");
            $bigBox.stop().animate({
                "left":"200px",
                "top":"200px",
                "width":0,
                "height":0
            },200);
        });
            $smallBox.mousemove(function(e){
                var left = e.pageX - $smallBox.offset().left  - $floatBox.width()/2;
                var top = e.pageY - $smallBox.offset().top  - $floatBox.height()/2;
                if(left < 0){
                    left = 0;
                }else if(left > ($smallBox.width() - $floatBox.width())){
                    left = $smallBox.width() - $floatBox.width();
                }

                if(top < 0){
                    top = 0;
                }else if(top > ($smallBox.height() - $floatBox.height())){
                    top = $smallBox.height() - $floatBox.height() ;
                }
                $floatBox.css("left",left+"px");
                $floatBox.css("top",top+"px");
                console.log($smallBox.height());
                var percentX = left/($smallBox.width()-$floatBox.width());
                var percentY = top/($smallBox.height()-$floatBox.height());

                $img.css("left",-percentX * ($img.width() - $bigBox.width())+"px");

                $img.css("top",-percentY * ($img.height() - $bigBox.height())+"px");
            });
    }
    zoom();
    /**
     * //////////////////////////////////////添加到购物车弹出框及消失
     */
    $("#addtocart").on("click",function(){
        //console.log(getCookie(myproTotalNum));
        if(checkCookie(myproTotalNum)==""){
            addCookie(myproTotalNum,0,30);
            //console.log(getCookie(myproTotalNum));
        }
        if(checkCookie(myproTotalPrice)==""){
            addCookie(myproTotalPrice,0,30);
            //console.log(parseInt(getCookie(myproTotalPrice))+100);
        }
        if(checkCookie(myUserName)==""){
            window.location="login.html";
        }else{
            var cartproPic=$(".demo-ulbox").find("ul").find("li").find("img").attr("src");
            //console.log(cartproPic);
            var cartproName=$("#proname").text();
            var cartproNum=parseInt($("#pronums").val());
            var cartproPrice=parseInt($("#proprices").text());
            var cartproSmallSum=cartproPrice*cartproNum;
            console.log(cartproSmallSum);
            //console.log(parseInt($("#proprices").text()))
            //console.log(($("#proprices").text()));
            //console.log(cartproPrice*cartproNum);
            var cartproColor=$(".procolor-warning").text();
            var cartproStyle=$(".prosexstyle-warning").text();
            var cartproTotalNum=parseInt(getCookie(myproTotalNum))+cartproNum;
            var cartproTotalPrice=parseInt(getCookie(myproTotalPrice))+cartproPrice*cartproNum;
            var listener="Listen";
            if(cartproColor==""){
                $(".procolor-warning").text("请选择颜色");
            }else if(cartproStyle==""){
                $(".prosexstyle-warning").text("请选择款式");
            }else{
                $(".pop-menu-cart").css({"display":"block"});
                addCookie(listener,"true",30);
                addCookie(isLogin,"true",30);
                addCookie(myproPic,cartproPic,30);
                addCookie(myproName,cartproName,30);
                addCookie(myproNum,cartproNum,30);
                addCookie(myproTotalNum,cartproTotalNum,30);
                //console.log(getCookie(myproTotalNum));
                addCookie(myproTotalPrice,cartproTotalPrice,30);
                //console.log(myproTotalPrice);
                addCookie(myproPrice,cartproPrice,30);
                addCookie(myproSmallSum,cartproSmallSum,30);
                addCookie(myproColor,cartproColor,30);
                addCookie(myproStyle,cartproStyle,30);
                $("#shop-bag-pronum").text(parseInt(getCookie(myproTotalNum)));
                $("#prototal-price").text(parseInt(getCookie(myproTotalPrice)));
            }
        }


    });
    $(".pop-menu-delete").on("click",function(e){
        e.stopPropagation();
        e.preventDefault();
        $(".pop-menu-cart").css({"display":"none"});
    });
    /**
     * //////////////////////////////////////悬浮窗口切换、上移以及悬浮效果
     */
    function ceiling(){
        var oLis=$(".hover-div2-ul").find("li");
        var oDivs=$(".main-right").find("div");
        //console.log(oLis.length);
        for(var i in oLis){
            oLis.eq(i).on("click",function(){
                var currIndex=$(this).index();
                $(this).addClass("active").siblings().removeClass("active");
                $("html,body").animate({"scrollTop":"849px"},100);
                oDivs.eq(currIndex).css({"display":"block"}).siblings().css({"display":"none"});
            })
        };
        $(".hover-div2-dv").hover(function(){
            $(this).find("div").css({"display":"block","z-index":900});
        },function(){
            $(this).find("div").css({"display":"none","z-index":0});
        });
        var setTop=$(".contt-hover").offset().top;
        $(window).scroll(function(){
            var scrollTop = $(window).scrollTop();
            //console.log(scrollTop);
            if(scrollTop >parseInt(setTop)){
                //console.log(111);
                $(".contt-hover").addClass("fixed");
            }else{
                //console.log(000);
                $(".contt-hover").removeClass("fixed");
            }
        });
    };
   ceiling();

    /**
     * ///////////////////////////////////////////会员价滑入滑出效果
     */
    $(".registermem-price").hover(function(){
        $(this).css({"border":"1px solid #ccc","border-bottom":"1px solid #fff"});
        $(this).find(".fugaiborder").css({"display":"block"});
        $(this).find(".registermem-price-drop").css({"display":"block"});
    },function(){
        $(this).css({"border":"1px solid #fff"});
        $(this).find(".fugaiborder").css({"display":"none"});
        $(this).find(".registermem-price-drop").css({"display":"none"})
    });

    /**
     * //////////////////////////////////////商品数量的加减
     */
    $("#add").on("click",function(){
        $("#pronums").val(parseInt($("#pronums").val())+1);
        if(parseInt($("#pronums").val())>5){
            $("#pronums").val(5);
        }
    });
    $("#cut").on("click",function(){
        $("#pronums").val(parseInt($("#pronums").val())-1);
        if(parseInt($("#pronums").val())<1){
            $("#pronums").val("1");
        }
    });

    /**
     * //////////////////////////////////////选择商品种类时边框改变
     */
    function prozhonglei(obj1,obj2,obj3){
        $(obj1).find(obj2).on("click",function(){
            $(this).css({"border":"1px solid #c77f40"}).siblings(obj2).css({"border":"1px solid #ccc"});
            $(obj3).text($(this).text());
        })
    };
    prozhonglei(".colorseriesbox",".knum",".procolor-warning");
    prozhonglei(".stylebox",".sex",".prosexstyle-warning");

    /**
     * /////////////////////////////////////点击分享配图边框改变
     */
    function sharewp(obj){
        $(obj).on("click",function(){
            $(this).css({"border":"2px solid #c8a985"}).siblings().css({"border":""});
            $(this).find("div").css({"display":"block"});
            $(this).siblings().find("div").css({"display":"none"});
        });
    };
    sharewp("#withpic-box1");
    sharewp("#withpic-box2");
    sharewp("#withpic-box3");
    sharewp("#withpic-box4");
    function shareto(obj){
        $(obj).on("click",function(){
            $(this).find("b").css({"display":"block"});
            $(this).siblings().find("b").css({"display":"none"});
        })
    };
    shareto(".shareto-weibo");
    shareto(".shareto-weixin");
    /**
     * ////////////////////////////////弹出和取消分享给朋友对话框
     */
    $(".zoomright-div6-dv2").on("click",function(){
        $(".protect").css({"display":"block"});
        $(".share-popbox").css({"display":"block"});
        var demoLis=$(".demo-ulbox").find("ul").find("li");
        var withpicBoxImgs=$(".withpic-box > div");
        //console.log(withpicBoxImgs);
        //console.log(demoLis.html());
        //console.log(demoLis);
        var demoLisLen=demoLis.length;
        //console.log(demoLisLen);
        for(var i=0;i<demoLisLen-2;i++){
            var demoLisHTML=demoLis.eq(i).html();
            //console.log(demoLisHTML);
            var currIndex=demoLis.eq(i).index();
            //console.log(currIndex);
            withpicBoxImgs.eq(currIndex).html("<div class="+"withpic-rightdown"+"></div>"+demoLisHTML);
        }
    });
    $(".share-friendsbox").find("span").on("click",function(){
        $(".protect").css({"display":"none"});
        $(".share-popbox").css({"display":"none"});
    });
    /**
     * ////////////////////////////////点击分享按钮
     */
    $("#sharebtn").on("click",function(){
        var textArea=$(".share-popbox-textarea").val();
        //console.log(textArea);
        var withpicBoxImg=$(".withpic-box > div").find('img');
        if($(".share-to").find("span").find("b")){
        //分享到相应的Web应用中
        }
        $(".share-popbox").css({"display":"none"});
        $(".protect").css({"display":"none"});

    });
    /**
     * //////////////////////////////////点击收藏
     */
    $(".zoomright-div6-dv1").on('click',function(){
        if(checkCookie(myUserName)){
            $(".collect_warning").css({"display":"block"}).delay(3000).fadeOut();
        }else{
            window.location="login.html";
        }

    })
});
