/*外部js文件*/


//根据id返回对应的元素对象||||||||||||||||||||||||||||||||||||||||||
	function $(id)
	{
		return document.getElementById(id);
	}


//解决addEventListener与attachEvent兼容问题||||||||||||||||||||||||||||||||||||||||||||||
	function attach(target,eventType,func)
	{	//事件类型字符串中是否以on开头
		var inde=eventType.indexOf("on");
		if(target.addEventListener)
			{	//以on开头，去掉on
				if(inde==0)
					{eventType=eventType.substring(2);}
				target.addEventListener(eventType,func,false);
			}
		else{	//不以on开头，链接on前缀
				if(inde!=0)
				{eventType='on'+eventType;}
				target.attachEvent(eventType,func);
		    }
	}


//获取指定元素的指定样式属性值|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
	function getStyle(element,attr)
	{
		if(element.currentStyle)
		{
			return element.currentStyle[attr];
		}
		else
			{
				return getComputedStyle(element,false)[attr];
			}
	}


//在指定日期时间的基础上加上指定天数||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//返回日期时间的字符窜格式
	function addDate(date,days)
	{
		date.setTime(date.getTime()+days*24*60*60*1000);
		return date.toUTCString();
	}

//添加cookie|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//key:cookie名称
//value:cookie值
//expiresDays:有效天数
	function addCookie(key,value,expiresDays)
	{
	document.cookie=key+"="+value+";expires="+addDate(new Date(),expiresDays);
	}

//去掉字符串前后空白||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
	function trim(str)
	{
	   return str.replace(/^\s+|\s+$/g,"");
	}

//获取一个cookie（根据cookie名称查询cookie值）||||||||||||||||||||||||||||||||||||||||||||||||||||||
	function getCookie(key)
	{
		//获取所有cookie信息
		var cks=document.cookie.split(";");
		//遍历各个cookie，查找cookie
		for(var i=0,len=cks.length;i<len;i++)
		{
			var ck=cks[i].split("=");//key=value,ck[0]=key,ck[1]=value
			if(trim(ck[0])==key)
			{
				return ck[1];
			}
		}
		//for循环以后还是找不到
		return null;
	}


//删除cookie|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
	function delCookie(key)
	{
		document.cookie=key+"=;expires="+(new Date()).toUTCString();
	}
	
	
//根据ID NAME class名获取元素|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
function get(info){
	if(info.indexOf("#")==0){
		return document.getelementById(info.subString(1));
	}
	if(info.indexOf("tag=")==0){
		return document.getelementsByTagName(info.subString(4));
	}
	if(info.indexOf(".")==0){
		return document.getelementByClassName(info.subString(1));
	}
}


//缓冲运动封装||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\\\
function move(element,obj,fn){
				clearInterval(element.timer)
				element.timer=setInterval(function(){
					//遍历json对象的所有属性
					for(var attr in obj ){
						//根据遍历到的属性名，获取对应css中的属性值
						var currStyle=getStyle(element,attr);
						//判断当前遍历到的css属性是否为opacity
						if(attr=="opacity"){//不透明
							currStyle=currStyle*100;
						}
						//将currStyle转换成整数
						currStyle=parseInt(currStyle);
						//计算速度
						var speed=(obj[attr]-currStyle)/8;
						speed=speed>0?Math.ceil(speed):Math.floor(speed);
						//修改元素的css样式属性
						currStyle+=speed;
						//判断是否设置opacity
						if(attr=="opacity"){
							element.style[attr]=currStyle/100
						}else{
							element.style[attr]=currStyle+'px';
						}
					var clear = true;//默认应该取消定时器
					for(var attr in obj){
						var _style = getStyle(element,attr);
						_style = parseInt(attr=="opacity"?_style*100:_style)
						if(_style != obj[attr]){
							clear = false;//不取消
						}
					}
					if(_style==obj[attr]){
						clearInterval(element.timer);
						//调用后继函数
						fn && fn();
					}
				}
			},50)
       }