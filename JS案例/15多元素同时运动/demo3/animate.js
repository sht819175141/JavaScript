//obj   ===》 代表当前对象
//json  ===》 属性[键值对] 例如：{width:300}
//fn    ===》 回调函数 
  
function animate(obj,json,fn){   //end attr 

	clearInterval(obj.time);
	var bool = true;  //后续判断当前动画,是否完成
	obj.time = setInterval(function(){

		for(var i in json){

		var ciur = "";

		if(i=="opacity"){

			ciur = Math.round(parseFloat(getStyle(obj,i))*100);

		}else{

			ciur = parseInt(getStyle(obj,i));
		}


		var speed =(json[i]-ciur)/8;

		speed=speed>0?Math.ceil(speed):Math.floor(speed);

		if(ciur!=json[i]){
			bool = false;	
		}

		if(i=="opacity"){

			obj.style[i] = (ciur + speed)/100;

			obj.style[i] = "alpha("+(ciur + speed)+")";

		}else{
			
			obj.style[i] = ciur + speed +"px";
		}

		if(bool){

			clearInterval(obj.time);
				if(fn){
				fn();
			}
		}
		
	}

	},50)

}

function getStyle(obj,attr){

	if(obj.currentStyle){

		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}

}
