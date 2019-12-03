window.onload = function(){
	waterfall("waterfall","box");
	var imgs = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"2.jpg"}]}
	window.onscroll = function(){
		if(scrollTop){

			for(var j =0;j<imgs.data.length;j++){
			var pro = document.getElementById("waterfall");

			var oDiv = document.createElement("div");
			oDiv.className = "box";
			pro.appendChild(oDiv);

			var content = document.createElement("div");
			content.className = "content";	
			oDiv.appendChild(content);

			var img = document.createElement("img");
				img.src = "img/"+imgs.data[j].src;
			content.appendChild(img);
			}
		} 
		waterfall("waterfall","box");
	}
}

function scrollTop(){

	var oBoxs = getClassName("waterfall","box");

	for(var i =0;i<oBoxs.length;i++){
		var width = oBoxs[oBoxs.length-1].offsetHeight/2;
	}
	
	var lastHeight = oBoxs[oBoxs.length-1].offsetTop+width;
	var client = document.documentElement.clientHeight
	var scroll=document.body.scrollTop || document.documentElement.scrollTop

	if( lastHeight < scroll+client  ){
		return true;
	}else{
		return false;
	}
}

function waterfall(parent,box){

	var oBox = getClassName(parent,box);
	//获取到所有box

	var boxWidth = oBox[0].offsetWidth;
	//获取box下标0图片的宽度

	var MaxWdith = document.documentElement.clientWidth;

	//可视区域的宽度

	var widthIdex = Math.floor(MaxWdith/boxWidth);

	//可视区域放入图片的张数

	var hrr = [];  //所有图片的高

	for(var i =0;i<oBox.length;i++){

		if(i<widthIdex){ //第一排的图片

			hrr.push( oBox[i].offsetHeight ); 
			//第一排每张图片的高度

		}else{ //第一排以下的图片

			var minHeight = Math.min.apply(null,hrr);

			//计算hrr数组中的最小值

			var oIndex = getMinIndex(hrr,minHeight);

			//计算hrr数组中的最小值的位置

			oBox[i].style.position = "absolute";
			oBox[i].style.left = oIndex*boxWidth+"px";
			oBox[i].style.top = minHeight+"px";

			hrr[oIndex] += oBox[i].offsetHeight;
		}
	}
}
function getMinIndex(brr,val){
	for(var i in brr){
		if(brr[i]==val){
			return i;
		}
	}
}

function getClassName(parent,className){

	var arr = [];
	var oparent = document.getElementById(parent);
	var child = oparent.getElementsByTagName("*");
	for(var i =0;i<child.length;i++){
		if(child[i].className==className){
			arr.push(child[i]);
		}
	}
	return arr;
}

/*
apply 方法
应用某一对象的一个方法，用另一个对象替换当前对象。

apply([thisObj[,argArray]])

参数
thisObj

可选项。将被用作当前对象的对象。

argArray

可选项。将被传递给该函数的参数数组。
*/