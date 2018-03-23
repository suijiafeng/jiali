//图片预览小图移动效果,页面加载时触发
function baseFn( scrollDiv, scrollItems, next, prev, viewNum, moveNum ){
	var tempLength = 0; //临时变量,当前移动的长度
	var viewNum = viewNum; //设置每次显示图片的个数量
	var moveNum = moveNum; //每次移动的数量
	var moveTime = 300; //移动速度,毫秒
	var scrollDiv = scrollDiv; //进行移动动画的容器
	var scrollItems = scrollItems; //移动容器里的集合
	var moveLength = scrollItems.eq(0).width() * moveNum; //计算每次移动的长度
	var countLength = (scrollItems.length - viewNum) * scrollItems.eq(0).width(); //计算总长度,总个数*单个长度

	if(countLength <= 0){
		next.addClass('non');
	}

	//下一张
	next.bind("click",function(){
		if(tempLength < countLength){
			prev.removeClass('non');
			if((countLength - tempLength) > moveLength){
				scrollDiv.animate({left:"-=" + moveLength + "px"}, moveTime);
				tempLength += moveLength;
			}else{
				scrollDiv.animate({left:"-=" + (countLength - tempLength) + "px"}, moveTime);
				tempLength += (countLength - tempLength);
				$(this).addClass('non');
			}
		}
	});
	//上一张
	prev.bind("click",function(){
		if(tempLength > 0){
			next.removeClass('non');
			if(tempLength > moveLength){
				scrollDiv.animate({left: "+=" + moveLength + "px"}, moveTime);
				tempLength -= moveLength;
			}else{
				scrollDiv.animate({left: "+=" + tempLength + "px"}, moveTime);
				tempLength = 0;
				$(this).addClass('non');
			}
		}
	});
}
//==================图片详细页函数=====================