;$(function(){
    $(".add_and_save").on("click",function(){
        //console.log(111)
        var buyerRealName=$("#buyer_name").val();
        var buyerAddress1=$("#loc_province").find("option").attr("value");
        var buyerAddress2=$("#loc_city").find("option").attr("value");
        var buyerAddress3=$("#loc_town").find("option").attr("value");
        var buyerDetailAddr=$("#detail_addr").val();
        var buyerPhoneNum=$("#confirm_phonenum").val();
        var buyRealName="buyrealName";
        var buyAddress="buyAddress";
        var buyPhoneNum="buyPhone";
        if(buyerRealName==""|| buyerDetailAddr==""||buyerPhoneNum==""){
            $(this).text("信息错误");
        }else{
            addCookie(buyRealName,buyerRealName,30);
            addCookie(buyAddress,buyerAddress1+buyerAddress2+buyerAddress3+buyerDetailAddr,30);
            addCookie(buyPhoneNum,buyerPhoneNum,30);
            //console.log($("#loc_province").attr("selectedIndex"));
            $(".addressbox_down").css({"display":"block"});
           $(".addressbox").css({"display":"none"});
        }

    });
    $(".rewrite_addr").on("click",function(){
        $(".addressbox").css({"display":"block"});
        $(".addressbox_down").css({"display":"none"});
    });
    $(".add_and_savedown").on("click",function(){
        $("#buyer_name").val("");
        $("#detail_addr").val("");
        $("#confirm_phonenum").val("");
    });
    $(".more_pay").on("click",function(){
        $(".pay_waydown").css({"display":"none"});
        $(".online_pay").css({"display":"block"});
    });
    $(".online_pay_delete").on("click",function(){
        $(".pay_waydown").css({"display":"block"});
        $(".online_pay").css({"display":"none"});
    });

});