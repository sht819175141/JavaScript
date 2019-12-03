<?php header("content-type:text/html;charset='utf-8'");
	
	$arr1=array("001"=>东北,"003"=>哈尔滨,"005"=>22);
	$arr2=array("001"=>山西,"003"=>运城,"005"=>28);
	$arr3=array("001"=>辽宁,"003"=>葫芦岛,"005"=>23);

	if($_GET["cb"]){
		$op=$_GET["cb"];
	}
	else{
		$op=fun;
	}

	if($_GET["kc"]){
		$kc=$_GET["kc"];
		if($kc=="王丹"){
			$kc=json_encode($arr1);
		}else if($kc=="左敏"){
			$kc=json_encode($arr2);
		}else if($kc=="大老李"){
			$kc=json_encode($arr3);
		}
	}else{
			$kc=json_encode($arr1);
		}
	echo "$op(".$kc.")";
?>