window.onload = function(){
	var demo = document.getElementById("demo");
	var smallbox = document.getElementById("small-box");
	var floatBox = document.getElementById("float-box");
	var bigBox = document.getElementById("big-box");
	var bigImg = bigBox.getElementsByTagName("img")[0];
	
	
	smallbox.onmouseover = function(){
		floatBox.style.display = "block";
		bigBox.style.display = "block";
	}
	
	smallbox.onmouseout = function(){
		floatBox.style.display = "none";
		bigBox.style.display = "none";
	}
	var scrollTop = $(window).scrollTop();
	smallbox.onmousemove = function(e){
		var _event = e;
		
		var left = _event.pageX - demo.offsetLeft - smallbox.offsetLeft - floatBox.offsetWidth/2;
		var top = _event.pageY - demo.offsetTop - smallbox.offsetTop - floatBox.offsetHeight/2;
		
		
		if(left < 0){
			left = 0;
		}else if(left > (smallbox.offsetWidth - floatBox.offsetWidth)){
			left = smallbox.offsetWidth - floatBox.offsetWidth;
		}
		
		if(top < 0){
			top = 0;
		}else if(top > (smallbox.offsetHeight - floatBox.offsetHeight)){
			top = smallbox.offsetHeight - floatBox.offsetHeight;
		}
		
		floatBox.style.left = left + "px";
		floatBox.style.top = top + "px";
		
		
		var percentX = left/(smallbox.offsetWidth - floatBox.offsetWidth);
		var percentY = top/(smallbox.offsetHeight - floatBox.offsetHeight);
		
		bigImg.style.left = -percentX * (bigImg.offsetWidth - bigBox.offsetWidth)+"px";
		bigImg.style.top = -percentY * (bigImg.offsetHeight - bigBox.offsetHeight)+"px";
		
	}
	
}
