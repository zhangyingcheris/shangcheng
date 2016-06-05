;$(function(){
    /**
     * //////////////////////////////////////////////滑动字母效果
     */
    var proDivs=$(".letter").find('div:not(.all_protxt)');
    console.log(proDivs.length)
    var proDivs2=$(".letter_down").find("div");
    //console.log(proDivs2.length)
    for(var i=0;i< proDivs.length;i++){
        proDivs.eq(i).on("mouseover",function(){
            console.log(111);
            var currentIndex=$(this).index();
            proDivs2.eq(currentIndex).css({"display":"block"}).siblings().css({"display":"none"});
        })
    }
    /**
     * /////////////////////////////////////////更多
     */
    $(".slidedown").on('click',function(){
        $(this).css({"display":"none"});
        $(".prol_brand_div6").css({"display":"block"});
        $(".slideup").css({"display":"block"});
    });
    $(".slideup").on('click',function(){
        $(this).css({"display":"none"});
        $(".prol_brand_div6").css({"display":"none"});
        $(".slidedown").css({"display":"block"});
    });
    /**
     * /////////////////////////////////////////动态加载产品列表
     */
    var num = 16;//一次加载5个
    var pageIndex = 0;//当前页是第几页
    var pageNum = 0;//页数
    var isFirst = false;//判断是不是第一次加载
    loadData(pageIndex,num);
    pageIndex++;
    function loadData(pageIndex,num){
        $.getJSON("data/package.json",function(data){
//			console.log(data)
            var len = data.length;
            pageNum = Math.ceil(len/num);
            if(isFirst == false){
                for(var i = 0; i < pageNum;i++){
                    $(".buddle").append('<div class="page">'+(i+1)+'</div>');
                }
                isFirst = true;
            }
            $(".page").on("click",function(){
                var index = $(this).index();
//				alert(index)
                ///alert(pageIndex)
                loadData(index,num);
            });
            var total = (((pageIndex*num+16)>len)?len:(pageIndex*num+16));
            $(".main_pic").html("");
            for (var i = pageIndex*num;i < total;i++) {
                $(".main_pic").append('<div class="main_pic_div">'+
                    '<ul><li class="main_pic_div_liImg"><a href="prodetails.html"><img src='+data[i].img+'></a></li>'+
                    '<li class="main_pic_div_li"><a href="#">Rihine莱茵</a></li>'+
                '<li class="main_pic_div_li"><a href="#">银色三眼大安针男士石英腕表 89702MGB</a></li>'+
                '<li class="main_pic_div_li">￥'+data[i].price+'</li>'+
                    '</ul></div>');
            }
        });
    }
    $(".last").click(function(){
        $.getJSON("data/package.json",function(data){
            var len = data.length;
            data.sort(function(a,b){
                return a.price - b.price;
            });
            $(".main_pic").html("");
            for (var i = 0;i < len;i++) {
                $(".main_pic").append('<div class="main_pic_div">'+
                    '<ul><li class="main_pic_div_liImg"><img src='+data[i].img+'></li>'+
                    '<li class="main_pic_div_li"><a href="#">Rihine莱茵</a></li>'+
                    '<li class="main_pic_div_li"><a href="#">银色三眼大安针男士石英腕表 89702MGB</a></li>'+
                    '<li class="main_pic_div_li">￥'+data[i].price+'</li>'+
                    '</ul></div>');
            }
        });
    })

});
