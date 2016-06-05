;$(function(){
    /**
     * ///////////////////////////////////顶部图标跳动
     */
    function imgmove(){
        var selfinfoTopImg=$(".selfinfo-logoright").find("div").find("img");
        //var selfinfoTopImgs=selfinfoTopImg.length;
        //console.log(selfinfoTopImgs)
        for(var i in selfinfoTopImg){
            selfinfoTopImg.eq(i).hover(function(){
                $(this).stop().animate({
                    "top":"-8px"
                })
            },function(){
                $(this).stop().animate({
                    "top":0
                })
            })
        }
    }
    imgmove();
    /**
     * /////////////////////////////////////点击切换背景色
     */
    var oDivs= $(".main_right_menubox").find(".main_right_ordernav");
    var oDivsLen=oDivs.length;
    for(var i=0;i<oDivsLen;i++){
        oDivs.eq(i).on("click",function(){
            $(this).css({"background":"#d00","color":"#fff"}).siblings().css({"background":"#fff","color":"#333"});
        })
    }
    /**
     * //////////////////////////////滑动轮播上部导航
     */
    var oLi=$(".toindexlook_down").find("li");
    var oUl=$(".myorder_circlepicbox").find("ul");
    for(var i in oLi){
        oLi.eq(i).hover(function(){
            var currIndex=$(this).index();
            $(this).addClass("circlebg2").siblings().removeClass("circlebg2");
            oUl.eq(currIndex).fadeIn().siblings().fadeOut();
            //oUl.eq(currIndex).css({"display":"block"}).siblings().css({"display":"none"})
        },function(){
            $(this).addClass("circlebg2");
        })
    }
    /**
     * ////////////////////////////////////无间隙滚动
     */
    function startmarquee(lh,speed,delay){
        var o=$(".myorder_circlepic_boxcont");
        var o_div=$(".myorder_circlepicbox");
        var str=o_div.html();
        //console.log(str);
        var newdiv=$("<div></div>");
        newdiv.html(str);
        //console.log(newdiv.find("li").length);
        //console.log(newdiv);
        o_div.parent().append(newdiv);
        //console.log(o.find("li").length);
        var timer;
        var p=false;
        o.on("mouseover",function(){ p=true;});         //lh:左移一次运动的距离
        o.on("mouseout",function(){ p=false;});         //speed:加3的速度，也就是运动速度
        function start(){
            //console.log(111);//delay:运动一次后停留的时间
            timer=setInterval(Marquee,speed);
            if(!p){
                var oScrollLeft=o.scrollLeft();
                o.scrollLeft(oScrollLeft+1);
                //console.log(oScrollLeft);
            }
        }
        /*------------------*/
        function Marquee(){
            //console.log(111);
            var oScrollLeft=o.scrollLeft();
            if(o_div.width()-oScrollLeft<=0){ //当窗口scrollLeft距离大于ul的宽度时，将scrollLeft置0
                o.scrollLeft(oScrollLeft-o_div.width());
            }
            else{                                 //当窗口scrollLeft距离小于ul的宽度时
                if(oScrollLeft%lh!=0){           //如果scrollLeft不是图片宽度的整数倍，则scrollLeft依次加3px
                    o.scrollLeft(oScrollLeft+1);
                }else{
                    clearInterval(timer);
                    setTimeout(start,delay);
                }
            }
        }
        /*----------------------*/
        setTimeout(start,delay);
    };
   /* $(".myorder_circlepic_leftbtn").find("div").on("click",function(){
        console.log(111);
        var o=$(".myorder_circlepic_outerbox").find("div").find("ul");
        var oScrollLeft=o.scrollLeft();
        var o_div= k.width();
        o.scrollLeft(oScrollLeft+188);
     if(oScrollLeft=o_div ){
         o.scrollLeft(0);
     }
    });*/
    startmarquee(188,100,1);//图片间停式滚动
//    startmarquee(175,30,1);//图片不间断滚动
});
