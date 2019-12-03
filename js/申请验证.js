var  form=document.forms[0],
     user=form.elements[0],
     pwd=form.elements[1],
     pwd2=form.elements[2],
     tip=document.getElementsByTagName('p'),
     userTip=tip[0],
     pwdTip=tip[1],
     pwd2Tip=tip[2],
     em=document.getElementsByTagName('em'),
     count=document.getElementById('count'),
     submitBtn=document.getElementById('submitBtn');


 //当user获取焦点的时候，显示userTip. 当失去焦点的时候，正则判断对错

  user.onfocus=function(){
    userTip.style.display='block'
    userTip.innerHTML='<i class="ati"></i>5-25个字符，一个汉字为两个字符，推荐使用中文会员名'
  }
  user.onblur=function(){
  	var reg=/[^\w\u4e00-\u9fa5]/
    var reg1=/[\w\w4400-\u9fa5]{6,25}/
  	//如果为空 则错误，提示不能为空
  	//否则如果长度不在 6-25位之间，提示长度不在范围内
  	// 只能是字母数字下划线汉字，不能有非法字符
  	//否则ok
  	if(user.value==""){
  		userTip.innerHTML='<i class="err"></i>不能为空';
      return  false
  	//}else if(user.value.length<6 || user.value.length>25){
                  }else if(!reg1.test(user.value)){
        userTip.innerHTML='<i class="err"></i>不在长度范围内'
      return false
  	}else if(reg.test(user.value)){
  		 userTip.innerHTML='<i class="err"></i>存在非法字符'
       return false
  	}else{
  		 userTip.innerHTML='<i class="ok"></i>ok!'
       return true
  	}
  	
  }

  pwd.onfocus=function(){
     pwdTip.style.display='block'
     pwdTip.innerHTML='<i class="ati"></i>5-25个字符'
  }
  pwd.onblur=function(){
    var reg=/[^a-zA-Z]/
    var reg1=/\D/
    if(pwd.value==""){
      pwdTip.innerHTML='<i class="err"></i>不能为空';
       return false
    }else if(pwd.value.length<6 || pwd.value.length>12){
      pwdTip.innerHTML='<i class="err"></i>不在长度范围内'
       return false
    }else if(!reg.test(pwd.value)){
      pwdTip.innerHTML='<i class="err"></i>不能全为字母'
       return false
    }else if(!reg1.test(pwd.value)){
      pwdTip.innerHTML='<i class="err"></i>不能全为数字'
       return false
    }else{
      pwdTip.innerHTML='<i class="ok"></i>ok!'
       return true
    }

  }

pwd2.onfocus=function(){
  pwd2Tip.style.display='block'
  pwd2Tip.innerHTML='<i class="ati"></i>请再输入一次'
}

 pwd2.onblur=function(){
    
    if(pwd2.value==''){
       pwd2Tip.innerHTML='<i class="err"></i>不能为空';
        return false
    }else if(pwd.value!=pwd2.value){
      pwd2Tip.innerHTML='<i class="err"></i>两次密码不一致'
       return false
    }else{
      pwd2Tip.innerHTML='<i class="ok"></i>ok!  !!'
       return true
    }
 }


 // 1 密码不能为空
 // 2 密码的长度在6-12位之间
 // 3 不能是全字母
 // 4不能是全数字


 // 1不能为空
 // 2 和密码不一致


 //密码强度的判断
  

pwd.onkeyup=function(){
   var pwdL=pwd.value.length
/*     if(pwdL>5 && pwdL<=10){
       em[1].className='active'
       em[2].className=''
     }else if(pwdL>10){
       em[1].className='active';
       em[2].className='active'
     }else{
       em[0].className='active'
       em[1].className='';
       em[2].className=''
     }
*/

     if(pwdL>5){
       em[1].className='active'
     }
     else{
       em[1].className=''
     }
    
    if(pwdL>10){
      em[2].className='active'
    }
    else{
      em[2].className=""
    }
}

//统计用户名的个数

user.onkeyup=function(){
    count.style.display='inline-block'
    count.innerHTML=getLength(user.value)+'个字符'
}


 function  getLength(str){
  var reg=/[^\x00-\xff]/g
  var newStr=str.replace(reg,'**')
   return    newStr.length
 }


 //单击submitBtn的时候，只有全部正确才提交
//dom0
/* submitBtn.onclick=function(){
  
 }*/
//dom2
//对象.addEventListener(事件，函数,false)
  submitBtn.addEventListener('click',function(){
  userresult=user.onblur()
  pwdresult=pwd.onblur()
  pwd2result=pwd2.onblur()

 

   if(userresult && pwdresult && pwd2result){
    //提交表单
      //谁.提交
      //form.submit() 
      alert('正确')
   }  

  },false)
  