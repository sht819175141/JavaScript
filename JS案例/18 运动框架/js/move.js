function startMove(obj,iTarget,attr,callback){

	clearInterval(obj.timer);
    
         var  speed
     obj.timer= setInterval(function(){
       // var cur=parseInt(getStyle(obj,"width"))
        var cur
            if(attr=='opacity'){
            	cur=parseFloat(getStyle(obj,"opacity"))*100;
            }else{
            	cur=parseInt(getStyle(obj,attr))
            }
              
          if(cur<iTarget){
             speed=Math.ceil((iTarget-cur)/15)
          }else{
             speed=Math.floor((iTarget-cur)/15)
          }
         
         if(cur==iTarget){
         	clearInterval(obj.timer)
         	if(callback){callback()}
         }else{
         	if(attr=='opacity'){
         		 obj.style.opacity=(cur+speed)/100
         		}else{
         			obj.style[attr]=cur+speed+'px'
         		}
         	   
         }
          
           
      },30)   


}

function getStyle(obj,attr){
	if(obj.currentStyle){//IE
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}
/*function getStyle(obj,attr){
 if(obj.currentStyle){
 	return obj.currentStyle[attr];
 }else{
    return getComputedStyle(obj,null)[attr];

 }

}*/