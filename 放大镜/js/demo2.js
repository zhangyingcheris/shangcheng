;$(function(){
	var $demo = $("#demo");
	var $smallBox = $("#small-box");
	var $floatBox = $("#float-box");
	var $bigBox = $("#big-box");
	var $img = $bigBox.find("img");
	
	$smallBox.hover(function(){
		$floatBox.css("display","block");
		$bigBox.css("display","block");
	},function(){
		$floatBox.css("display","none");
		$bigBox.css("display","none");
	})
	$smallBox.mousemove(function(e){
		var left = e.pageX - $smallBox.offset().left  - $floatBox.width()/2;
		var top = e.pageY - $smallBox.offset().top  - $floatBox.height()/2;
	
		
		if(left < 0){
			left = 0;
		}else if(left > ($smallBox.width() - $floatBox.width())){
			left = $smallBox.width() - $floatBox.width();
		}
		
		if(top < 0){
			top = 0;
		}else if(top > ($smallBox.height() - $floatBox.height())){
			top = $smallBox.height() - $floatBox.height() ;
		}
		$floatBox.css("left",left+"px");
		$floatBox.css("top",top+"px");
		
		var percentX = left/($smallBox.width()-$floatBox.width());
		var percentY = top/($smallBox.height()-$floatBox.height());
		
		$img.css("left",-percentX * ($img.width() - $bigBox.width())+"px");
		
		$img.css("top",-percentY * ($img.height() - $bigBox.height())+"px");
	});
		
});
