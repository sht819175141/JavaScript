var i=0;

function timedCount(){
	i=i+1;
	//子线程与主线程之间互相通信使用方法，传递的data为任意值。
	postMessage(i);
	setTimeout("timedCount()",500);
}

timedCount();