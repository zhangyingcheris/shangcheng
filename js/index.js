
;$(function(){
    /**
     * //////////////////////////////////顶部点击新优惠弹出效果
     */
    function top(){
        $(".new-police").on("click",function(){
            $("#top-pic").css({"display":"block"});
        });
        $("#top-pic").find("img").on("click",function(){
            $("#top-pic").css({"display":"none"});
        });
    };
   top();
    /**
     * ////////////////////////////////////////////// 页面加载窗口底部图片
     */
    $(".onload-block-div1 a").on("click",function(){
        $(".onload-block").css({"display":"none"});
    })
    /**
     * //////////////////////////////////////登录注册转换
     */
    if(getCookie(isLogin)=="true"){
        $(".header-right-div").find(".login-box").find("a").text(getCookie(myUserName));
        $(".header-right-div").find(".login-box").find("a").attr("href","selfinfo.html");
        $(".header-right-div").find(".register-box").find("a").text("退出");
        $(".header-right-div").find(".register-box").find("a").attr("href","index.html");
        $(".header-right-div").find(".register-box").find("a").on('click',function(){
            updateCookie(isLogin,"false",5);
            window.location = "index.html";
        });

    };

    /**
     * ///////////////////////////////////我的第五大道滑动效果
     */
    function fivebox(){
        $(".five-box-dt").hover(function(){
            $(this).css({"border":"1px solid #f8f8f8","border-bottom":"1px solid #fff"});
            $(this).find(".five-box-ul").css({"display":"block","z-index":999,"border":"1px solid #f8f8f8","border-top":"1px solid #fff"});
            $("#header-logo").css({"z-index":-3});
        },function(){
            $(this).css({"border":""});
            $(this).find(".five-box-ul").css({"display":"none"});
            $("#header-logo").css({"z-index":0});
        });
    };
    fivebox();
    /**
     * /////////////////////////////////////菜单导航最后一个li滑动效果
     */
    function lilast(){
        $(".nav-last").hover(function(){
            $(this).find("span").css("background","url(images/index/allbg2.png) no-repeat -366px -252px");
            $(this).find("a").css("color","#fff");
        },function(){
            $(this).find("span").css("background","url(images/index/allbg2.png) no-repeat -58px -169px");
            $(this).find("a").css("color","");
        });
    };
    lilast();
    /**
     * ///////////////////////////////////////手机版下载滑动效果
     */
    function phonedownload(){
        $(".phoneDownload-dt").hover(function(){
            $(this).css({"border":"1px solid #f8f8f8","border-bottom":0})
            $(".phoneDownload-dd").css({"display":"block","z-index":"999"});
        },function(){
            $(this).css({"background":"","border":"1px solid #f2f2f2","border-bottom":0});
            $(".phoneDownload-dd").css("display","none");
        });
    };
    phonedownload();
    /**
     * ////////////////////////////////////////logo栏中购物袋滑动效果
     */
   /*$(".cartBox-dt").hover(function(){
        $(".cartBox").css({"border-right":"1px solid #ccc","border-bottom":"1px solid #ccc"});
        $(".cartBox-dd").css({"display":"block"});
    },function(){
        $(".cartBox").css({"border-right":"","border-bottom":""});
        $(".cartBox-dd").css({"display":"none"});
    });*/
    /**
     * /////////////////////////////////////////商品分类效果
     */
    function prodetail(){
        $("#header-nav .header-nav-ul .first-li").hover(function(){
            $("#header-nav").css({"z-index":3});
            $(this).find(".prodetails-div1").css({"display":"block"});
        },function(){
            $("#header-nav").css({"z-index":0});
            $(this).find(".prodetails-div1").css({"display":"none"});
        });
        $("#header-nav .header-nav-ul .first-li .drop-li1").hover(function(){
            $(this).find("#three-div").css({"display":"block"});
        },function(){
            $(this).find("#three-div").css({"display":"none"});
        });
    };
    prodetail();
    /**
     * /////////////////////////////////////////商品分类滑动效果
     */
    function profenlei(obj,obj1,obj2,obj3){
        $(obj).hover(function(){
            $(this).css({
                "background-image":"url(images/index/prodetailbg2.png)",
                "background-repeat":"no-repeat",
                "background-position": obj1,
                "opacity":1});
            $(this).find(".prodetails-div1-sp2").css({
                "background-image":"url(images/index/allbg2.png)",
                "background-repeat":"no-repeat",
                "background-position": obj2});
            $(this).find(".three-div").css({"display":"block","opacity":1,"background":"#fff","top":obj3});
        },function(){
            $(this).css({"background":"","opacity": 0.8});
            $(this).find(".prodetails-div1-sp2").css({"background":""});
            $(this).find(".three-div").css({"display":"none"})
        });
    }
    //"-5px -3px"
    //"-304px -30px"
    profenlei(".drop-li1","-5px -3px","-304px -30px",0);
    profenlei(".drop-li2","-5px -35px","-304px -30px","-30px");
    profenlei(".drop-li3","-5px -67px","-304px -30px","-60px");
    profenlei(".drop-li4","-5px -98px","-304px -30px","-90px");
    profenlei(".drop-li5","-5px -130px","-304px -30px","-120px");
    profenlei(".drop-li6","-5px -162px","-304px -30px","-150px");
    profenlei(".drop-li7","-5px -194px","-304px -30px","-180px");
    profenlei(".drop-li8","-5px -226px","-304px -30px","-180px");
    profenlei(".drop-li9","-5px -258px","-304px -30px","-180px");
    profenlei(".drop-li10","-5px -290px","-304px -30px","-180px");
    profenlei(".drop-li11","-5px -325px","-304px -30px","-180px");
    profenlei(".drop-li12","-5px -356px","-304px -30px","-200px");
    profenlei(".drop-li13","-5px -389px","-304px -30px","-180px");
    profenlei(".drop-li14","-5px -422px","-304px -30px","-200px");
    profenlei(".drop-li15","-5px -458px","-304px -30px","-180px");
    /**
     * ////////////////////////////////////////侧边栏滑动效果
     */
    function sliderbar1(obj){
        $(obj).hover(function(){
            $(this).find("div").css({"display":"block"});
            $(this).find("img").css({"display":"block"});
        },function(){
            $(this).find("div").css({"display":"none"});
            $(this).find("img").css({"display":"none"});
        })
    };
    sliderbar1(".bar-1-ul-li2");
    sliderbar1(".bar-1-ul-li3");
    sliderbar1(".bar-1-ul-li4");
    sliderbar1(".bar-1-ul-li5");
    sliderbar1(".bar-1-ul-li6");
    sliderbar1(".bar-1-ul-li7");
    /**
     * ///////////////////////////////////////侧边栏点击效果
     */
    function sliderclick(){
        var index=2;
        $("#rightbar").find(".bar-1").find(".bar-1-ul-li1").on("click",function(){
            if(index%2==0){
                $("#rightbar").animate({"right":0});
                index++;
            }else{
                $("#rightbar").animate({"right":"-279px"});
                index++;
            }
        });
    };
    $(".bar-2-div1delete").click(function(){
        //console.log(11)
        $("#rightbar").animate({"right":"-279px"});
    });
    $(".bar_1_bdvalue").on("click",function(e){
        e.stopPropagation();
        e.preventDefault();
        $(".bdvalue").css({"display":"block"});
    });
    $(".txt_hide").on("click",function(ev){
        //console.log(111)
        ev.stopPropagation();
        ev.preventDefault();
       $(this).parent().parent().css({"display":"none"});
    });
    function slidertotop(){
        $("#rightbar").find(".bar-1").find(".bar-1-ul-li7").on("click",function(){
            $("html,body").animate({
                "scrollTop":0
            },300);
        })
    };
    sliderclick();
    slidertotop();
    /**
     * //////////////////////////////////////侧边栏点击弹出意见框效果
     */
    function suggestion(){
        $(".bar-1-ul-li6").on("click",function(){
            $(".protect").css({"display":"block"});
            $("#suggestion").css({"display":"block"});
        });
        $(".delete2").on("click",function(){
            $(".protect").css({"display":"none"});
            $("#suggestion").css({"display":"none"});
        })
    }
    suggestion();
    /**
     * /////////////////////////////////////////////打败世界的BANNER轮播
     */
    function banner(){
        var oUL=document.getElementsByClassName("banner-u1")[0];
        var oLI=oUL.children;
        var firstNode=oLI[0].cloneNode(true);
        var current=1;
        var nUL=document.getElementsByClassName("banner-u2")[0];
        var nLI=nUL.children;
        var imgWidth=oLI[0].offsetWidth;
        var rightBtn=document.getElementById("rightBtn");
        var leftBtn=document.getElementById("leftBtn");
        oUL.appendChild(firstNode);
        oUL.style.width=imgWidth*(oLI.length+1)+"px";
        var timer = setInterval(moveStart,5000);
        for(var i=0;i<nLI.length;i++){
            nLI[i].index = i;
            nLI[i].onmouseover=function(){
                clearInterval(timer);
                for(var j=0;j<nLI.length;j++){
                    nLI[j].className="";
                }
                this.className="on";
                move(oUL,{left:this.index*-imgWidth});
                timer = setInterval(moveStart,5000);
                current=this.index+1;
            }
        }
        rightBtn.onclick = function(){
            clearInterval(timer);
            //console.log(current)
            if(current==8){
                current=1;
                oUL.style.left=0;
            }
            for(var i=0;i<nLI.length;i++){
                nLI[i].className='';
            }
            nLI[current==7?0:current].className='on';
            move(oUL,{left:current*-imgWidth});
            current++;
        }
        leftBtn.onclick = function(){
            clearInterval(timer);
            console.log(current);
            if(current==8){
                current=1;
                oUL.style.left=0;
            }
           for(var i=0;i<nLI.length;i++){
                nLI[i].className='';
            }
            nLI[7-current].className='on';
            move(oUL,{left:(7-current)*-imgWidth});
            current++;


        }
        function moveStart(){
            if(current==7){
                current=1;
                oUL.style.left=0;
            }
            move(oUL,{left:current*-imgWidth});
            for(var i=0;i<nLI.length;i++){
                nLI[i].className="";
            }
            nLI[current==8?0:current].className="on";
            current++;
        }
    };
    banner();
    /**
     * ////////////////////////////////////品牌旗舰滑动上滑效果
     */
    function brandover(){
        var $BrandDiv1Dvs=$(".brand-div1").find("div");
        for(var i in $BrandDiv1Dvs){
            $BrandDiv1Dvs.eq(i).hover(function(){
                $(this).find(".brand-div1-dv-1").stop(true).animate({
                    "top":"174px"
                },"fast");
            },function(){
                $(this).find(".brand-div1-dv-1").stop(true).animate({
                    "top":"273px"
                },"fast");
            })
        }
    };
    brandover();
    /**
     * ///////////////////////////////////////品牌旗舰小小轮播效果
     */
    function brandlunbo(){
        var $BrandUl=$(".brand-ul");
        var $BrandRightBtn=$(".brand-rightbtn");
        var $BrandLeftBtn=$(".brand-leftbtn");
        var $LiWidth=$(".brand-ul li").width();
        var currIndex=1;
        $BrandRightBtn.on("click",function(){
            if(currIndex==1){
                $BrandUl.animate({
                    "left":"-=1210px"
                },"fast");
                return currIndex++;
            };
            if(currIndex==2){
                $BrandUl.animate({
                    "left":"-=1210px"
                },"fast")
                return currIndex++;
            }
        });
        $BrandLeftBtn.on("click",function(){
            if(currIndex==3){
                $BrandUl.animate({
                    "left":"+=1210px"
                },"fast");
                return currIndex--;
            }
            if(currIndex==2){
                $BrandUl.animate({
                    "left":"+=1210px"
                },"fast");
                return currIndex--;
            }
        })
    };
    brandlunbo();
    /**
     * ////////////////////////////////////////边框动画效果
     */
    function brandborder(){
        var $oUterDiv=$(".brand-ul li").find(".outer-div");
        for(var i in $oUterDiv){
            $oUterDiv.eq(i).hover(function(){
                $(this).css({"border-left":"1px solid #fff","border-top":"1px solid #fff"});
                $(this).find("img").css({"display":"none"});
                $(this).find(".inner-div1").css({"display":"block"});
                $(this).find(".inner-div1").stop().animate({"width":"110px","height":"58px"},"fast");
                $(this).find(".inner-div2").stop().animate({"width":0},"fast");
                $(this).find(".inner-div3").stop().animate({"height":0},"fast");
            },function(){
                $(this).css({"border-left":"1px solid #ccc","border-top":"1px solid #ccc","display":"block"});
                $(this).find("img").css({"display":"block"});
                $(this).find(".inner-div1").stop().animate({"width":0,"height":0},"fast");
                $(this).find(".inner-div1").css({"display":"none"});
                $(this).find(".inner-div2").stop().animate({"width":"165px"},"fast");
                $(this).find(".inner-div3").stop().animate({"height":"83px"},"fast");
            })
        }
    };
    brandborder();
    /**
     * /////////////////////////////////////////购物中心左边小轮播效果
     */
    function shopleft(obj){
        var $oLi=$(obj).find(".slider-small-ul-box").find("ul").find("li");
        var currIndex=1;
        $(obj).find(".slider-leftbtn").on("click",function(){
            //console.log(111)
            if(currIndex==1){
                //console.log( $(this).siblings(".slider-small-ul-box").find("ul"))
                $(this).parent().parent().siblings().find("ul").animate({
                    "left":"-=220px"
                },"fast");
                $oLi.eq(currIndex).addClass("on").siblings().removeClass("on");
                return currIndex++;
            };
            if(currIndex==2){
                console.log(222)
                $(this).parent().parent().siblings().find("ul").animate({
                    "left":"-=220px"
                },"fast");
                $oLi.eq(currIndex).addClass("on").siblings().removeClass("on");
                return currIndex++;
            }
        });
        $(obj).find(".slider-rightbtn").on("click",function(){
            if(currIndex==3){
                $(this).parent().parent().siblings().find("ul").animate({
                    "left":"+=220px"
                },"fast");
                $oLi.eq(currIndex-2).addClass("on").siblings().removeClass("on");
                return currIndex--;
            }
            if(currIndex==2){
                $(this).parent().parent().siblings().find("ul").animate({
                    "left":"+=220px"
                },"fast");
                $oLi.eq(currIndex-2).addClass("on").siblings().removeClass("on");
                return currIndex--;
            }
        })
    };
    shopleft(".slider-ulboxdown1");
    shopleft(".slider-ulboxdown2");
    shopleft(".slider-ulboxdown3");
    shopleft(".slider-ulboxdown4");
    shopleft(".slider-ulboxdown5");
    /**
     * ////////////////////////////////////////购物中心导航滑动效果
     */
    function shopover(){
        var $FloorControl=$(".floorcontrol1");
        for(var i in $FloorControl){
            $FloorControl.eq(i).hover(function(){
                $(this).find(".ft1-div1").stop(true).animate({"top":"-50px"},200);
                $(this).find(".ft1-div2").stop(true).animate({"top":0},200);
            },function(){
                $(this).find(".ft1-div1").stop(true).animate({"top":0},200);
                $(this).find(".ft1-div2").stop(true).animate({"top":"50px"},200);
            })
        }
    }
    shopover();
    /**
     * ////////////////////////////////////////购物中心导航点击效果
     */
    function shopclick(){
        $(".flooramt2").on("click",function(){
            $(window).scrollTop(2702);
        });
        $(".flooramt3").on("click",function(){
            $(window).scrollTop(3134);
        });
        $(".flooramt4").on("click",function(){
            $(window).scrollTop(3575);
        });
        $(".flooramt5").on("click",function(){
            $(window).scrollTop(4007);
        });
    }
    shopclick();
    /**
     * ///////////////////////////////////////商场同款导航滑过效果
     */
    function hot(){
        var $hotDiv=$(".hot-dv2").find("div");
        for(var i in $hotDiv){
            $hotDiv.eq(i).on("mouseover",function(){
                $(this).css({"opacity":1}).siblings().css({"opacity":0.5});
                i=$(this).index();
                $(".hot-dv3").find(".hot-dv3-ul").animate({
                    "left":(i*-1210)+"px"
                })
            })
        }
    }
    hot();
    /**
     * //////////////////////////////////////商场同款导航三内的滑动效果
     */
    function hot2(obj){
        $(obj).hover(function(){
            $(this).find(".nothing1").css({"display":"block"});
            $(this).find(".nothing1down").css({"display":"block"});
        },function(){
            $(this).find(".nothing1").css({"display":"none"});
            $(this).find(".nothing1down").css({"display":"none"});
        })
    }
    hot2(".star-div1");
    hot2(".star-div2");
    hot2(".star-div3");
    hot2(".star-div4");
    hot2(".star-div5");
    /**
     * //////////////////////////////////////商场同款导航一二下滑动效果
     */
    $(".hot-dv3-ul-dv21box").find(".hot-dv3-ul-dv21").hover(function(){
        $(this).find(".dv21-1").stop(true).animate({"left":"60px"},"fast");
        $(this).find(".dv21-2").stop(true).animate({"left":"55px"},"fast");
    },function(){
        $(this).find(".dv21-1").stop(true).animate({"left":"80px"},"fast");
        $(this).find(".dv21-2").stop(true).animate({"left":"40px"},"fast");
    })
    $(".hot-dv3-ul-dv21box").find(".hot-dv3-ul-dv31").hover(function(){
        $(this).find(".dv21-1").stop(true).animate({"left":"60px"},"fast");
        $(this).find(".dv21-2").stop(true).animate({"left":"153px"},"fast");
    },function(){
        $(this).find(".dv21-1").stop(true).animate({"left":"80px"},"fast");
        $(this).find(".dv21-2").stop(true).animate({"left":"140px"},"fast");
    })
    function hot1(obj){
        $(".hot-dv3-ul-dv51box").find(obj).hover(function(){
            $(this).find(".dv21-1").stop(true).animate({"left":"95px"},"fast");
            $(this).find(".dv21-2").stop(true).animate({"left":"87px"},"fast");
        },function(){
            $(this).find(".dv21-1").stop(true).animate({"left":"110px"},"fast");
            $(this).find(".dv21-2").stop(true).animate({"left":"64px"},"fast");
        })
    }
    hot1(".hot-dv3-ul-dv51");
    /**
     * ///////////////////////////////////////主题活动底部滑动效果
     */
    function proborder(obj){
        var proDiv1s=$(".pro-div1").find(obj);
        var proDiv2s=$(".pro-div2").find("a");
        var currIndex;
        for(var i in proDiv1s){
            proDiv1s.eq(i).hover(function(){
                currIndex=$(this).index();
                $(this).css({"border-left":"1px solid #fff","border-top":"1px solid #fff"});
                $(this).find(".pro-inner-div11").css({"display":"block"});
                $(this).find(".pro-inner-div11").stop().animate({"width":"192px","height":"63px"},"fast");
                $(this).find(".pro-inner-div21").stop().animate({"height":0},"fast");
                $(this).find(".pro-inner-div31").stop().animate({"width":0},"fast");
                proDiv2s.eq(currIndex).show().siblings().hide();
            },function(){
                $(this).css({"display":"block","border-left":"1px solid #ccc","border-top":"1px solid #ccc","width":"192px","height":"63px"});
                $(this).find(".pro-inner-div11").stop().animate({"width":0,"height":0},"fast");
                $(this).find(".pro-inner-div21").stop().animate({"height":"64px"},"fast");
                $(this).find(".pro-inner-div31").stop().animate({"width":"193px"},"fast");
            })
        }
    };
    proborder(".pro-div1-dv1");
    proborder(".pro-div1-dv2");
    proborder(".pro-div1-dv3");
    proborder(".pro-div1-dv4");
    proborder(".pro-div1-dv5");
    proborder(".pro-div1-dv6");
});




