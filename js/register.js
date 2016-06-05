
;$(function(){
    /*//////////////////////////////注册验证///////////////////////////////////*/
    /*------用户名验证------*/
        $("#account-inp").on("focus",function(){
            $(this).css({"border":"1px solid #f6a809","border-radius":"3px"});
            $(".account").find('div').css({"display":"block"});
            $(".account").find('div').text("只允许4-12位的字母和数字，以字母开头");
        });
        $("#account-inp").on("blur",function(){
            $(".account").find('div').text("");
            var reg=/^[a-zA-Z]{4,12}$/;
            var accountValue=$(this).val();
            if(reg.test(accountValue)){
                $("#account-inp").val($(this).val());
                $(this).css({"border":"","border-radius":""});
                $(".account").find('div').css({"display":"none"});
            }else if(accountValue==false){
                $(this).css({"border":"","border-radius":""});
            }else{
                $(".account").find('div').text("用户名格式不正确");
            }
        });
    /*-------手机号码验证*/
        $(".click_getnum").on("click",function(){
            var reg=/^[1]\d{10}$/;
            var getNum=$(".phone_inp").val();
            if(!reg.test(getNum)){
                $(".getnum_box").find("span").text("号码不正确");
            }else{
                var str="";
                for(var i=0;i<5;i++){
                    var num=Math.floor(Math.random()*(123-48))+48;
                    if(num>=48&&num<=57||num>=65&&num<=90||num>=97&&num<=122){
                        str+=String.fromCharCode(num);
                    }
                }
                $(".getnum_box").find("span").text(str);
            }
        });
    $(".phone_inp").on("focus",function(){
        $(this).css({"border":"1px solid #f6a809","border-radius":"3px"});
    });
    $(".getnum_box").find("input").on("blur",function(){
        $(this).css({"border":"","border-radius":""});
        var getNum=$(this).val();
        console.log(getNum);
        var realNum= $(".phone").find(".getnum_box").find("span").text();
        console.log(realNum);
        if(getNum!=realNum){
            $(".getnum_box").find("span").text("验证码不正确");
        }
    });
    /*--------邮箱验证-------*/

        $(".email-inp").on("focus",function(){
            $(".email").find('div').text("");
            $(this).css({"border":"1px solid #f6a809","border-radius":"3px"});
        });
        $(".email-inp").on("blur",function(){
            var reg=/^\w+@\w+(\.\w+)+$/;
            var emailValue=$(this).val();
            if(reg.test(emailValue)){
                $(".email-inp").val($(this).val());
                $(".email").find('div').css({"display":"none"});
                $(this).css({"border":"","border-radius":""});
            }else if(emailValue==false){
                $(this).css({"border":"","border-radius":""});
            }else{
                $(".email").find('div').css({"display":"block"});
                $(this).css({"border":"","border-radius":""});
                $(".email").find('div').text("邮箱格式有误");
            }
        });

    /*-------密码验证-------*/
        $(".passward-inp").on("focus",function(){
            $(this).css({"border":"1px solid #f6a809","border-radius":"3px"});
            $(".passward").find("div").text("密码为6-14位的数字，字母或者下划线");
            $(".passward-inp").val($(this).val());
        });
        $(".passward-inp").on("blur",function(){
            $(".passward").find("div").text("");
            var reg=/^[0-9a-zA-Z]{6,14}$/;
            var passwardValue=$(this).val();
            if(reg.test(passwardValue)){
                $(".passward-inp").val($(this).val());
                $(this).css({"border":"","border-radius":""});
            }else if(passwardValue==false){
                $(this).css({"border":"","border-radius":""});
            }else{
                $(".passward").find('div').css({"display":"block"});
                $(this).css({"border":"","border-radius":""});
                $(".passward").find('div').html("密码格式不正确");
            }
        });

    /*-------密码再次验证-------*/
        $(".confirm-psd-inp").on("focus",function(){
            $(".confirm-psd").find('div').text("");
            $(".confirm-psd-inp").val($(this).val());
        });
        $(".confirm-psd-inp").on("blur",function(){
            var passwardValue=$(".passward-inp").val();
            var confirmValue=$(this).val();
            if(confirmValue==passwardValue){
            }else{
                $(".confirm-psd").find('div').text("密码不一致");
            }
        });

    /*------提交-------------*/
    var  myUserName = "myUserName";//cookie中存用户名的键名
    var  myEmail = "myEmailName";//cookie中存用户名的email
    var  myPwd = "myPwdName";//cookie中密码的键名
    var  myPhone="myPhoneNum";//cookie中用户号码
    var  isLogin = "isLogin";//监测用户是否是登录中
        $("#register-btn").on("click",function(){
            var accountName=$("#account-inp").val();
            var emailName=$("#email-inp").val();
            var pwdName=$("#passward-inp").val();
            var phoneNum=$("#phone_inp").val();
            if(accountName==""){
                $(".account").find('div').css({"display":"block"});
                $(".account").find('div').text("请填写注册用户名");
            }else if(phoneNum==""){
                $(".getnum_box").find("span").text("请填写手机号码");
            }else if(emailName==""){
                $(".email").find('div').css({"display":"block"});
                $(".email").find('div').text("请填写注册邮箱");
            }else if(pwdName==""){
                $(".passward").find('div').css({"display":"block"});
                $(".passward").find('div').text("请填写注册密码");
            }else{
                toRegister(accountName,emailName,pwdName);
            }
        });
        function toRegister(accountName,emailName,pwdName,phoneNum){
            if(!checkCookie(myUserName)){
                addCookie(myUserName,accountName,30);
                addCookie(myEmail,emailName,30);
                addCookie(myPwd,pwdName,30);
                addCookie(myPhone,phoneNum,30);
                addCookie(isLogin,"false",2);
                window.location = "login.html";
            }else{
                if(getCookie(myUserName) == accountName){
                    $(".account").find('div').css({"display":"block"});
                    $(".account").find('div').text("用户已存在，请登录");
                }else{
                    updateCookie(myUserName,accountName,30);
                    updateCookie(myEmail,emailName,30);
                    updateCookie(myPwd,pwdName,30);
                    updateCookie(myPhone,phoneNum,30);
                    updateCookie(isLogin,"false",2);
                    window.location = "login.html";
                }
            }
        };
    /*////////////////////////////////////侧边框滑动效果///////////////////////////////////*/
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

    /*//////////////////////////////////侧边框点击效果//////////////////////////////////////////////////////*/
    function sliderclick(){
        var index=2;
        $("#rightbar").find(".bar-1").find(".bar-1-ul-li1").on("click",function(){
            if(index%2==0){
                $("#rightbar").css({"right":0});
                index++;
            }else{
                $("#rightbar").css({"right":"-279px"});
                index++;
            }
        });
    };
    function slidertotop(){
        $("#rightbar").find(".bar-1").find(".bar-1-ul-li7").on("click",function(){
            $(window).scrollTop(0);
        })
    }
    sliderclick();
    slidertotop();

    /*//////////////////////////////////////意见和建议弹出框///////////////////////////////////////////////*/
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

});
