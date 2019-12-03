var $ = function(){
	return new Game();
}

function Game(){
	this.arr = [];
	this.getId = function(id){
		this.arr.push(document.getElementById(id));
		return this; 
	};
	this.getTagName=function(elem){
		var brr = document.getElementsByTagName(id);
		for(var i = 0;i<brr.length;i++){
			this.arr.push(brr[i]);
		}
		return this; 
	}
}

Game.prototype.hover = function(over,out){
	for(var i =0;i<this.arr.length;i++){
		this.arr[i].onmouseover = over;
		this.arr[i].onmouseout = out;
	}
	return this;
}
Game.prototype.hide = function(){
	for(var i =0;i<this.arr.length;i++){
		this.arr[i].style.display = "none";
	}
	return this;
}

Game.prototype.show = function(){
	for(var i =0;i<this.arr.length;i++){
		this.arr[i].style.display = "block";
	}
	return this;
}

Game.prototype.css = function(style,value){
		for(var i =0;i<this.arr.length;i++){
			if(arguments.length == 1){
				return this.arr[i].style[style]
			}
			this.arr[i].style[style]= value;
		}
		return this;
}

Game.prototype.click = function(fn){
		for(var i =0;i<this.arr.length;i++){
			this.arr[i].onclick = fn;
		}
		return this;	
}

Game.prototype.getClassName = function(className){
	var crr = document.getElementsByTagName("*");
	for(var i =0;i<crr.length;i++){
		if(crr[i].className == className){
			this.arr.push(crr[i]);
		}
	}
	return this;		
}

Game.prototype.eq =function(num){
	var element = this.arr[num];
	this.arr = [];
	this.arr[0] = element;
	return this;
}

Game.prototype.html = function(h){
	if(arguments.length == 0){
		return this.arr[0].innerHTML;
	}	
	this.arr[0].innerHTML = h;
	return this;
}

Game.prototype.resize = function(fn){
	for(var i =0;i<this.arr.length;i++){
			window.onresize = fn;
	}
	return this;
}

Game.prototype.content = function(left,top){
	for(var i =0;i<this.arr.length;i++){
		var left = (document.documentElement.clientWidth-400)/2;
		var top = (document.documentElement.clientHeight-300)/2;
		this.arr[i].style.left = left+"px"
		this.arr[i].style.top = top+"px"
	}
	return this;
}

Game.prototype.extend = function(name,fn){
	Game.prototype[name] = fn;
}
/*Game.prototype.animate = function(attr,step,t){
	for(var i =0;i<this.arr.length;i++){
		var aa = this.arr[i];
		setInterval(function(){
			aa.style[attr] = parseInt(aa.style[attr])+step+"px";
		},t);
	}
	return this;
}
*/

Game.prototype.slideDown = function(ii,t){	 
	for(var i =0;i<this.arr.length;i++){
		var aabb = this.arr[i];
		setInterval(function(){
			if(ii>i){
				aabb.style.width = ++i+"px";
				aabb.style.height = ++i+"px";
				aabb.style.display = "block";
			}
		},t)
	}
	return this;
}