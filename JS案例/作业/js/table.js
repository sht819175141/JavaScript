var table=document.getElementById("tab")
//获取表头 对象.tHead   一个
//获取表尾 对象.tFoot    一个
//获取主体部分 对象.tBodies 多个 nodeList 数组
//获取行   对象.rows nodList 数组 rows[0]
//获取单元格  对象.cells nodeList 数组 cells[0]
/* console.log(table.tHead)
 console.log(table.tFoot)
 console.log(table.tBodies[0])
var  tbody=table.tBodies[0]
 console.log(tbody.rows[0].cells[1].innerHTML)
 console.log(tbody.rows[2].cells[1].innerHTML)

 //插入行  对象.insertRow(index)
 //插入单元格  对象.insertCell(index)
 var newTr=tbody.insertRow(4) ,
     td1= newTr.insertCell(0),
     td2=newTr.insertCell(1)
     td1.innerHTML='<input type="checkbox" name="song">'
     td2.innerHTML="匆匆那年5"
//删除行  对象.deleteRow(index)
//删除单元格 对象.deleteCell(index)
    //tbody.deleteRow(0)
 //   var tr1=tbody.rows[0]
//        tr1.deleteCell(0)*/


var selectAll=document.getElementById("selectAll"),
    songs=document.getElementsByName("song"),
    tbody=table.tBodies[0],
    Row=tbody.rows,
    add=document.getElementById('add'),
    txtbox=document.getElementById('txtbox'),
    del=document.getElementById("del")


//全选：单击全选的时候，遍历song的复选框，让他的状态和全选的状态一样

    selectAll.onclick=function(){
    	//遍历所有的songs
    	for(var i=0;i<songs.length;i++){
               songs[i].checked=this.checked
               //选中有背景，不选没有背景
               changeBj(i)
                       
    	}
    }
//单选：当复选框选中的时候，添加背景，否则没有背景

clickChangebj()
//单选封装为了一个函数
function  clickChangebj(){ 

    for(var i=0;i<songs.length;i++){
         songs[i].index=i
    	 songs[i].onclick=function(){
				changeBj(this.index)
    	 }

    }
 }

//封装函数 ：改变背景色的函数 
function  changeBj(id){

 if(songs[id].checked){
 				//行添加背景
               Row[id].style.background='#f4f4f4'
             }
             else{
             	////行删除背景
             	Row[id].style.background=""

             }

}

//添加行：
  /*单击添加的时候:
   如果 歌曲内容没有 ，则弹出你们输入歌曲名
   否则
        插入一行
        插入两列
        第一列：复选框
        第二列：歌曲名输入*/

 add.onclick=function(){

    if(txtbox.value==""){
    	 alert("请输入歌曲名")

    }
    else{
    	 insertRow()
      //单选     
		clickChangebj()

    }
  
 }


function insertRow(){
		//插入一行
    	var newTr=tbody.insertRow(Row.length)
        //插入两列
        td1=  newTr.insertCell(0)
        td2=  newTr.insertCell(1)
        td1.innerHTML='<input type="checkbox" name="song">'
        td2.innerHTML=txtbox.value
}

//删除
//遍历所有的复选框songs,如果有选中的则删除，否则弹出没有选中的无法删除。

del.onclick=function(){
	var flag="没有"
    var  num=0
	 for(var i=0;i<songs.length;i++){
          if(songs[i].checked){
          	num++
          }

	 }

    if(num==0){
    	alert("你没有选中的删除")
    }
    else{
         //删除选中行
          // 对象.deleteRow(index)
          deleteRow() 
            
    }

}

//删除行的函数
function  deleteRow(){
	 for(var i=songs.length-1;i>=0;i--){
             	if(songs[i].checked){
             		tbody.deleteRow(i)
             	}

             }
}