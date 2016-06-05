
;$(function(){

    /**
     * /////////////////////////////////////添加到购物车中生成节点
     */
    if(getCookie(listener)=="true"){
        //$(".sc-currProSum-down").html("");
        $(".sc-currProSum-down p").css({"display":"none"});
        $(".sc-currProSum-down a").css({"display":"none"});
        $(".go_accountbox").css({"display":"block"});
        addcart();
    }
    function addcart(){
        $(".sc-currProSum-down").append(
            "<"+"div>" +
            "<"+"div class='"+"checkbox"+"'><input type='"+"checkbox"+"'checked='"+"'/></"+"div>"+
            "<"+"div class='"+"propic"+"'><a href='"+"prodetails.html"+"'><img src="+getCookie(myproPic)+"></"+"a></"+"div"+">"+
            "<"+"div class='"+"proname"+"'><a class='"+"proname-a"+"' href='"+"prodetails.html"+"'>"+getCookie(myproName)+"</"+"a></"+"div"+">"+
            "<"+"div class='"+"proattr"+"'>"+getCookie(myproColor)+","+getCookie(myproStyle)+"</"+"div"+">"+
            "<"+"div class='"+"proprice"+"'>"+getCookie(myproPrice)+".00"+"</"+"div"+">"+
            "<"+"div class='"+"pronum"+"'><div class='"+"cut"+"'>-</"+"div><input class='"+"pronums"+"'type='"+"text"+"' value="+getCookie(myproNum)+"><div class='"+"add"+"'>+</"+"div></"+"div>"+
            "<"+"div class='"+"actinfo"+"'></"+"div>"+
            "<"+"div class='"+"smallsum"+"'>"+getCookie(myproSmallSum)+".00"+"</"+"div>"+
            "<"+"div class='"+"handle"+"'><"+"p class='"+"handle_delete"+"'>"+"删除"+"</"+"p><"+"p class='"+"move_tocollect"+"'>"+"移入收藏夹"+"</p"+"><"+"div class='"+"pack"+"'><span"+"></"+"span>"+"定制包装"+"</"+"div></"+"div>"+
            "</"+"div>");
    };
        $(".add").on("click",function(){
            var cartunitPrice=parseInt($(".proprice").text());
            var cartproNum=parseInt($(".pronums").val());
            var proSmallSum=cartunitPrice*cartproNum;
            $(".smallsum").text(proSmallSum+".00");
            $(".pronums").val(parseInt($(".pronums").val())+1);
            if(parseInt($(".pronums").val())>5){
                $(".pronums").val(5);
            }
        });
        $(".cut").on("click",function(){
            var cartunitPrice=parseInt($(".proprice").text());
            var cartproNum=parseInt($(".pronums").val());
            var proSmallSum=cartunitPrice*cartproNum;
            $(".smallsum").text(proSmallSum+".00");
            $(".pronums").val(parseInt($(".pronums").val())-1);
            if(parseInt($(".pronums").val())<1){
                $(".pronums").val(1);
            }
        });
    function clearcart(obj){
        $(obj).on("click",function(){
            updateCookie(myproTotalNum,0,30);
            updateCookie(listener,"false",30);
            //updateCookie(isLogin,"false",30);
            $(".sc-currProSum-down > div").remove();
            $(".go_accountbox").remove();
            $(".sc-currProSum-down p").css({"display":"block"});
            $(".sc-currProSum-down a").css({"display":"block"});
        });
    }
    clearcart(".clear_cart");
    clearcart(".handle_delete");
    function alreadypro(){
        var proSum=0;
        var proPriceSum=0;
        proSum+=parseInt($(".pronums").val());
        proPriceSum+=parseInt($(".smallsum").text());
        $("#already_choicenum").text(proSum);
        $("#pro_allprice").text(proPriceSum);
    };
    alreadypro();
    $(".click_account").on("click",function(){
        window.location="shopcart.html";
    })
    var checkboxs=$(".sc-currProSum-down").find('div').find('.checkbox').find("input");
    //console.log(checkboxs);
    var checkboxsLen=checkboxs.length;
    var oAll=$(".sc-currProSum").find(".sc-allchoice").find("input");
    oAll.on("click",function() {
        //当全选框被选中时，即checked为ture
        console.log(oAll.attr("checked"))
        if (oAll.attr("checked") == "checked") {
            console.log(111);
            //遍历各个复选框
            for (var i = 0; i < checkboxsLen; i++) {
                //下标为i的复选框被选中，即checked为true
                checkboxs.eq(i).attr("checked","checked");
                alreadypro();
            }
        }
        //当全选框取消选中时，即checked为false
        else {
            console.log(222);
            //再次遍历复选框
            for (var i = 0; i < checkboxsLen; i++) {
                //下标为i的复选框取消选中，即checked为false
                checkboxs.eq(i).attr("checked","");
                $("#already_choicenum").text("0");
                $("#pro_allprice").text("0");
            }
        }
    });




});
