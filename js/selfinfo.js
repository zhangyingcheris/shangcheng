
;$(function(){
    /**
     * 滑动logo部分图标效果
     */

    //console.log(111)
    $(window).on("load",function(){
        //console.log(111)
        $("#selfinfo-username").text(getCookie(myUserName));
        $("#userEmail").val(getCookie(myEmail));
        //console.log(getCookie(myPhone));
        //$("#usernums").text(getCookie(myPhone));
    });
    /**
     * ////////////////////顶部图标跳动
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
});