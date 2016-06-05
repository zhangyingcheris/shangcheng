		var checkCode = "";//验证码的值
		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
		createText(ctx);
		var change = document.getElementById("change");
		change.onclick = function(){
			createText(ctx);
		}
		/**
		 * 绘制图片文本
		 * @param {Object} ctx
		 */
		function createText(ctx){
			with(ctx){
				//前两行代码的作用就是清除一块区域，方便重新绘制图片文字
				fillStyle = "#fff";	
				clearRect(0,0,80,40);
				var text = getRandom();
				font = "italic bold 30px microsoft yahei";
				textBaseline = "top";
				var lg = createLinearGradient(0,0,60,0);//设置一个渐变色，下边为颜色变化范围（水屏方向）
				lg.addColorStop(0,"pink");
				lg.addColorStop(0.2,"#ccc");
				lg.addColorStop(0.4,"skyblue");
				lg.addColorStop(0.6,"red");
				lg.addColorStop(0.8,"orange");
				lg.addColorStop(1,"gold");
				strokeStyle = lg;		//图片文字的颜色变化范围
				strokeText(text,0,12);//更改你的图片的位置
			}
		}
		
		
		/**
		 *设置自己的验证码吗内容
		 */
		function getRandom(){
			checkCode = "";
			var count = 0;
			// 循环产生随机字符
			while (count < 4) {
				// 生成一位随机字符
				// 先生成一个 48 - 122 之间的随机数字
				var rand = Math.floor(Math.random() * (123 - 48)) + 48
				// 判断产生的随机ASCII码是否在合理范围之内
				if (rand >= 48 && rand <= 57 || rand >= 65 && rand <= 90 || rand >= 97 && rand <= 122){		
					// 将 ASCII 码值转换为字符
					var ch = String.fromCharCode(rand);
					// 将生成的有效字符连接到验证码字符串中
					checkCode = checkCode + ch; // code += ch;
					// 生成位数增加
					count++;
				}
			}
			return checkCode;
		}
		


