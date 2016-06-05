
;$(function(){
    /**
     * ////////////////////////////////点击登录框效果
     */
    function clicklogininp(obj1,obj2){
        $(obj1).on("focus",function(){
            $(obj2).css({"display":"none"});
            $(this).css({"border":"1px solid #f6a809","border-radius":"3px"});
        });
        $(obj1).on("blur",function(){
            $(obj2).css({"display":"none"});
            $(this).css({"border":"","border-radius":""});
        });
    };
    clicklogininp(".account",".account-warning1");
    clicklogininp(".pswd",".account-warning2");
    /**
     * ///////////////////////////////////点击登录
     */
    $(".login-btn").on("click",function(){
        var userName = $(".account").val();
        var pwd = $(".pswd").val();
        //var checkNum = $("#checkNum").val();
        if(userName == ""){
            $(".account-warning1").css({"display":"block"});
            $(".account-warning1").text("请填写登录名");
        }else if(pwd == ""){
            $(".account-warning2").css({"display":"block"});
            $(".account-warning2").text("请填写密码");
        }else{
            /*if(checkNum != checkCode){
                alert("验证码错误");
            }else{*/
                toLogin(userName,pwd);
            }
        });
    var  myUserName = "myUserName";//cookie中存用户名的键名
    var  myEmail = "myEmailName";//cookie中存用户名的email
    var  myPwd = "myPwdName";//cookie中密码的键名
    var  isLogin = "isLogin";//监测用户是否是登录中
    function toLogin(userName,pwd){
        if(getCookie(myUserName) != userName){
            $(".account-warning1").css({"display":"block"});
            $(".account-warning1").text("用户不存在");
        }else{//用户名有啦
            if(getCookie(myPwd) != pwd){
                $(".account-warning2").css({"display":"block"});
                $(".account-warning2").text("密码输入错误");
            }else{//密码也对啦
                updateCookie(isLogin,"true",5);
                window.location = "index.html";
            }
        }
    }

});
