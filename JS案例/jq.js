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




