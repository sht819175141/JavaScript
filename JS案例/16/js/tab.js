var tab=document.getElementById('tab');
//var tbody=document.getElementsByTagName('tbody')
var  tbody=tab.tBodies  //tbody   对象(父元素).tBodies  获取所有的tbody 是一个数组
//var  rows=tbody[0].getElementsByTagName('tr')
var Rows=tbody[0].rows  //行    对象(父元素tbody).rows  获取所有tr nodeList
//var cells=Rows[0].getElementsByTagName('td')            
var cells=Rows[0].cells  //列   对象().cells  获取某一行的所有列  cells

var  selectall=document.getElementById('selectall');
var  ck=document.getElementsByName('ck');
var  count=document.getElementById('count');
var price=document.getElementById('price');    


for(var i=0;i<ck.length;i++){
	ck[i].checked=false;
		}

//全选/不选
//单击全选的时候。遍历所有的复选框，让每个复选框的状态等于全选的状态。
//如果选中。则对复选框的当前行添加背景，否则删除背景
	selectall.onclick=function(){
			for(var i=0;i<ck.length;i++){
				ck[i].checked=selectall.checked;
 			if(ck[i].checked){
         	   	 ck[i].parentNode.parentNode.style.background='#d4d4d4'
         	   }else{
         	   	ck[i].parentNode.parentNode.style.background=''
         	   }
			}
	}

//遍历所有的行 ，单击的是哪一行。
for(var i=0;i<Rows.length;i++){
	Rows[i].onclick=function(e){
		var event=e || window.event;
		var target=event.target || event.srcElement;
          
         // console.log(target)
         //复选框
         if(target.name=='ck'){
         	//如果选中的时候，添加背景 ，否则删除背景
         	   if(target.checked){
         	   	  this.style.background='#d4d4d4'
         	   }else{
         	   	this.style.background=''
         	   }
         }

         //单击的-
        var  val=this.getElementsByTagName('input')[1];
         if(target.className=='dec'){	
      	     if(val.value>0){
         	 // val.value--;
         	 val.value=val.value-1;
         	  }
         }	
         //单击的+
         if(target.className=='inc'){
         	 //val.value++
         	 val.value=parseInt(val.value)+1
         }
      //计算单项的总价:单价*数量
       var p
        p=parseFloat(this.cells[1].innerHTML)*parseInt(val.value)

       this.cells[3].innerHTML=p.toFixed(2)

         //单击的是删除
       // console.log(target.tagName //target.nodeName) 

       if(target.nodeName=='BUTTON'){
           tbody[0].removeChild(this)
       }





      getTotel();   
	}

}


//总价和总量函数

function  getTotel(){
var   c=0;
var   pic=0;
var   rs=tbody[0].rows;
for(var i=0;i<rs.length;i++){
	//如果复选框选中
	if(rs[i].getElementsByTagName('input')[0].checked){
		c=c+parseInt(rs[i].getElementsByTagName('input')[1].value);
		
		pic=pic+parseFloat(rs[i].cells[3].innerHTML);
	}

}

count.innerHTML=c;
price.innerHTML=pic;

}

