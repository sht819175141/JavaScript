var ck=document.getElementsByName('ck');
var tab=document.getElementById('tab');
var tbody=tab.tBodies;
var rows=tbody[0].rows;
var  count=document.getElementById('count');
var  price=document.getElementById('price');
var  selectall=document.getElementById('selectall');
var  pic=document.getElementById('pic')


for(var i=0;i<ck.length;i++){
	ck[i].onclick=function(){
		if(this.checked){
			this.parentNode.parentNode.style.background='red'	
		}else{
           	this.parentNode.parentNode.style.background=''
		}
	}
}
for(var i=0;i<ck.length;i++){
	ck[i].checked=selectall.checked;
	ck[i].onclick = function(){  
		 
	}
}

for(var i=0;i<rows.length;i++){
	   rows[i].onclick=function(e){
	   	var  event=e  || window.event;
	   	var  target=event.target || event.srcElement;
	   	//复选框
	   	console.log(target)
	   	if(target.type=='checkbox'){
	   		 if(target.checked){
	   		 	this.style.background='orange';
	   		 }else{
                this.style.background='';
	   		 }
	   	}
	   	//- 
	   	var input=this.getElementsByTagName('input')[1]
	   	if(target.className=='dec'){
	   		if(input.value>0){
	   			input.value--;
	   		}			
	   	}
	   	//+
	   	if(target.className=='inc'){
	   		input.value++;
	   	}
       	var  p
       	p=parseFloat(this.cells[1].innerHTML)*parseInt(input.value)
       
        this.cells[3].innerHTML=p.toFixed(2)
        //删除
        if(target.tagName=='BUTTON'){
        	tbody[0].removeChild(this)
        }
        getTotel();
	   }
}

function getTotel(){
	//总量  总价
var  c=0;
var  p=0;
var html=""
var  rows=tbody[0].rows;
for(var i=0;i<rows.length;i++){
	if(rows[i].getElementsByTagName('input')[0].checked){
		c+=parseInt(rows[i].getElementsByTagName('input')[1].value);
		p+=parseFloat(rows[i].cells[3].innerHTML)
		html=html+'<img src="'+rows[i].cells[4].getElementsByTagName('img')[0].src+'">'
	}
}
	 count.innerHTML=c;
	 price.innerHTML=p;
	 pic.innerHTML=html;
}

selectall.onclick=function(){   
    for(var i=0;i<ck.length;i++){
    	 ck[i].checked=selectall.checked
    }
}