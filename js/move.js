$().extend("animate",function(json,fn){
	 
	 for(var i=0;i<this.elem.length;i++) 
	   Move(this.elem[i],json,fn);
	return this;		
});
 function getStyle(obj,attr){
    	if(obj.currentStyle){
    		return obj.currentStyle[attr];
    	}else{
    		return getComputedStyle(obj,null)[attr];
    	}
}
function Move(obj,json,fn){
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				var flag=true;  //多个属性同时到达目标
			  for(var attr in json){
				if(attr=="opacity"){
					var iCur=parseInt(parseFloat(getStyle(obj,attr))*100);
				}
				else{
				var iCur=parseInt(getStyle(obj,attr)); //去掉px
			    }
			    //算速度
				speed=(json[attr]-iCur)/8;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);

				if(json[attr]!=iCur){ //每个属性是否到目标
					flag=false;
				}
				iCur+=speed;
				if(attr=="opacity"){
					obj.style.filter="alpha(opactity:"+iCur+")";
					obj.style.opacity=iCur/100;
				}
				else{
					obj.style[attr]=iCur+"px";
				}
			   }
			   if(flag){
			   	 clearInterval(obj.timer);
			   	 if(fn){
			   	 	fn();
			   	 }
			   }
			},30);
		}
