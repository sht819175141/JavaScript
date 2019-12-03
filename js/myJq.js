//封装Id
function $(element){	
	return document.getElementById(element);
}

//封装addClass  ====>***没有学到正则,不完善,后期修改//又名添加class名

function addClass(box,class){
	if(box.className==" "){
		return box.className= class
	}else{
		return box.className += " "+ class;
	}
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

//封装移入移出hover方法
function start(element){
	return document.getElementById(element);
}

var obj = new start("box");

obj.hover=function(over,out){

	this.onmouseover = over;

	this.onmouseout = out;

}

//封装：前置，追加判断处理
function weizhi(newNode,target){
	if(target.parentNode.lastChild==target){
		target.parentNode.appendChild(newNode);
	}else{
		target.parentNode.insertBefore(newNode,target.nextSibling);
	}
}	
weizhi(lisa,lis[1])

//去除空白节点
function shanchu(target){
	for(var i=0;i<target.childNodes.length;i++){  //先遍历uls的所有子节点
		if(target.childNodes[i].nodeType==3){     //nodeType==>3
			target.removeChild(target.childNodes[i])  //删除
		}
	}
	//console.log(uls[0].childNodes)
}
shanchu(uls[0]);
//console.log(uls[0].childNodes)

