<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
</head>
<body>
	<h1></h1>
	<form action="Ajax.php" method="post">
		<label for="">user:</label>
		<input type="text" id="user" name="user"/>
		<br>
		<label for="">password</label>
		<input type="password" id="password" name="password"/>
		<br>
		<label for="">email:</label>
		<input type="email" id="email" name="email"/>
		<br>
		<input type="submit" id="btn" value="提交"/>
	</form>
	<script>
		window.onload=function(){
			//post方式
			var btn=document.getElementById("btn")
			//创建对象 判断浏览器兼容性
			function creatXMLHttpRequest(){
				try{
					return new XMLHttpRequest();
				}catch(e){
					try{
						return new ActiveXOject("Msxml2.XMLHTTP")
					}catch(e){
						try{
							return new ActiveXOject("Microsoft.XMLHTTP")
						}catch(e){
							
							alert("浏览器应用不正确")
						}
					}
				}
			}

			var xhr=creatXMLHttpRequest();
			//点击按钮
			btn.onclick=function(){
				var hh=document.getElementsByTagName("h1")[0];
				var user=document.getElementById("user");
				var password=document.getElementById("password");
				var email=document.getElementById("email");
				//第一步打开方式
				xhr.open("post","reg.php",true);
				//post与get的区别
				xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
				//发送请求
				xhr.send("user="+user.value+"&password="+password.value+"&email="+email.value);
				//判断状态
				xhr.onreadystatechange=function(){
					if(xhr.readyState==4 && xhr.status==200){
						//获取文本值
						var text=xhr.responseText;
						hh.innerHTML=text;
					}
				}

			}


			//get方式
			//var btn=document.getElementById("btn")
			/*function creatXMLHttpRequest(){
				try{
					return new XMLHttpRequest();
				}catch(e){
					try{
						return new ActiveXObject("Msxml2.XMLHTTP")
					}catch(e){
						try{
							return new ActiveXObject("Microsoft.XMLHTTP")
						}catch(e){
							alert("浏览器应用不正确")
						}
					}
				}

			}
			var xhr=creatXMLHttpRequest();
			btn.onclick=function(){
				var hh=document.getElementsByTagName("h1")[0];
				var user=document.getElementById("user");
				var password=document.getElementById("password");
				var email=document.getElementById("email")
				xhr.open("get","reg.php?user="+user.value+"&password="+password.value+"&email="+email.value,true);
				xhr.send(null);
				xhr.onreadystatechange=function(){
					if(xhr.readyState==4 && xhr.status==200){
						var text=xhr.responseText
						hh.innerHTML=text
					}
				}
			}*/
		} 
	</script>
</body>
</html>