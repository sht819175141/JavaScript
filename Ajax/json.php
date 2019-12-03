<?php header("content-type:text/html;charset='utf-8'");
	
	$arr1=array(王丹,家住：东北,哈尔滨,22);
	$arr2=array(左敏,家住：山西,运城,28);
	$arr3=array(大老李,家住：辽宁,葫芦岛,23,屌丝一个);
	
	if($_GET["ax"]){
		$aa=$_GET["ax"];
	}else{
		$aa=fun;
	}

	if($_GET["kc"]){
		$kc=$_GET["kc"];
		if($kc=="1412a"){
			$kc=json_encode($arr1);
		}else if($kc=="1412b"){
			$kc=json_encode($arr2);
		}else if($kc=="1412c"){
			$kc=json_encode($arr3);
		}
	}else{
		$kc=json_encode($arr1);
	}	
	echo "$aa(".$kc.")";
?>