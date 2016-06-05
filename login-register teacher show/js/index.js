;$(function(){
	if(getCookie(isLogin) == "true"){
		$("#user").html('<span>'+getCookie(myUserName)+'</span>|<span id="quit">退出</span>');
		$("#updatePwd").css("display","block");
	}else{
		$("#user").html("<a href='login.html'>登录</a>|<a href='register.html'>注册</a>");
		$("#updatePwd").css("display","none");
	}
	
	$("#quit").on("click",function(){
		updateCookie(isLogin,"false",5);
		window.location = "index.html";
	});
	$("#update").on("click",function(){
		var oldPwd = $("#oldPwd").val();
		var newPwd = $("#newPwd").val();
		var confirmPwd = $("#confirmPwd").val();
		
		if(getCookie(myPwd) != oldPwd){
			alert("旧密码不正确")
		}else{
			if(newPwd != confirmPwd){
				alert("确认密码不正确")
			}else{
				updateCookie(myPwd,newPwd);
			}
		}
	})
});	

