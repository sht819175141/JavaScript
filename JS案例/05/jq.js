//封装Id

function $(element){	

	return document.getElementById(element);

}

//封装addClass  ====>***没有学到正则,不完善,后期修改

function addClass(class1){

	return box.className += " "+ class1;

}


//封装getElementsByClassName

function getClassName(name){

	var arr = [];

	var crr = document.getElementsByTagName("*"); //12

	for(var i=0;i<crr.length;i++){

		if(crr[i].className==name){

			arr.push(crr[i]);

		}
	}

	return arr;
}

//innerText   textContent  封装

function txt(element){

	if(typeof element.innerText=="string"){

		return element.innerText;
	}else{
		return element.textContent;
	}

}

//添加非行间样式的样式
function addStyle(name,element,style,position){

	if(name.addRule){
		name.addRule(element,style,position);  
	}else{
		name.insertRule(element+"{"+style+"}",position); 
	}
}


//删除非行间样式的内容

function removeStyle(element,num){

	if(element.deleteRule){

		element.deleteRule(num);

	}else if(element.removeRule){

		element.removeRule(num);

	}
}
 
//事件绑定函数  ===》兼容已处理

function addEvent(element,on,fn){

	if(typeof element.addEventListener != "undefined"){
 
 		element.addEventListener(on,fn,false);

	}else{

		element.attachEvent("on"+on,fn);

	}

}




