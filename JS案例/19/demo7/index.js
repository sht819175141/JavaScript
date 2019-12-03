function myJq(){

	//获取元素在构造函数里
	this.arr = [];
	this.getId = function(id){

		this.arr.push(document.getElementById(id));

		return this;
	}

}
//每个元素===>共享方法

myJq.prototype.click = function(fn){

	this.arr[0].onclick = fn;

	return this;

}




