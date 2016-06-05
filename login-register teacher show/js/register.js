;$(function(){
	$("#register").on("click",function(){
		//获取输入框的值
		var userName = $("#userName").val();
		var pwd = $("#pwd").val();
		var confirmPwd = $("#confirmPwd").val();
		var checkNum = $("#checkNum").val();
		//alert(checkNum)
		//对空格进行处理--自己研究 -- trim
//		if(userName == ""||pwd == "" ||confirmPwd == "" || checkNum == ""){
//			alert("请完善你的信息");
//		}else{
//			if(pwd != confirmPwd){
//				alert("您输入的密码不一致");
//			}else{
//				if(checkNum != checkCode){
//					alert("验证码错误")
//				}else{
//					toRegister(userName,pwd);
//				}
//			}
//		}

		if(userName == ""){
			alert("姓名不能为空");
		}else if(pwd == "" ){
			alert("密码不能为空");	
		}else if(confirmPwd == ""){
			alert("确认密码不能为空");	
		}else if(checkNum == ""){
			alert("验证码不能为空");	
		}else{
			if(pwd != confirmPwd){
				alert("您输入的密码不一致");
			}else{
				if(checkNum != checkCode){
					alert("验证码错误")
				}else{
					toRegister(userName,pwd);
				}
			}
		}
	});
	
	function toRegister(userName,pwd){
		alert(checkCookie(myUserName))
		if(!checkCookie(myUserName)){
			addCookie(myUserName,userName,2);
			addCookie(myPwd,pwd,2);
			addCookie(isLogin,"false",2);
			window.location = "login.html";
		}else{
			if(getCookie(myUserName) == userName){
				alert("该用户名已经存在，请直接登录");
			}else{
				updateCookie(myUserName,userName,5);
				updateCookie(myPwd,pwd,5);
				updateCookie(isLogin,"false",2);
				window.location = "login.html"
			}
		}
		//window.location = "index.html"
	}
});
