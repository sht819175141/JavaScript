<?php 
	header("content-type:text/html;charset='utf-8'");
	if($_GET["cb"]){
		$op=$_GET["cb"];
	}
	else{
		$op=fun;
	}
	echo "$op('你好啊你好')";
?>