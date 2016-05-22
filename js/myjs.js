	window.onload=function(){
	
	var user_input=document.getElementById("user"),
		user_prompt=document.getElementById("user_prompt"),
		user_p=document.getElementById("user_p"),
	
		password_input=document.getElementById("password"),
		pass_prompt=document.getElementById("pass_prompt"),
		pass_p1=document.getElementById("pass_p1"),
		pass_middle=document.getElementById("middle"),
		pass_hard=document.getElementById("hard"),
		
		pass_config=document.getElementById("password_config");
		console.log(pass_config)
	
	user_input.onfocus=function(){													//获得焦点时
		user_prompt.style.visibility="visible";
		user_prompt.innerHTML="请输入用户名"
	
	}
	user_input.onkeyup=function(){													//输入文字时
		
		var myvalue= user_input.value;
		var acceptV=getCharacter(myvalue);
		
		user_p.innerHTML="输入了"+acceptV +"个字符";
		user_p.style.visibility="visible";
		if(myvalue.length==0){
			user_p.style.visibility="hidden";
		}
	}
	user_input.onblur=function(){												//失去焦点时
		var myvalue= user_input.value;
		if(myvalue==0){
			user_prompt.innerHTML="用户名不能为空"
		}else if(!/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/.test(myvalue)){
			user_prompt.innerHTML="格式不合法";
		}else if(myvalue.length>15){
			user_prompt.innerHTML="超过规定长度";	
		}
	}
	
	
	
	password_input.onfocus=function(){
		pass_prompt.style.visibility="visible";
		pass_prompt.innerHTML="请输入5-15位数字+字符的组合密码"	
	}
	password_input.onkeyup=function(){
		var myvalue= password_input.value;
		
		if(myvalue.length>5){														//输入大于5个字符串后，解冻确认密码栏
			pass_config.removeAttribute("disabled");
		}else{
			pass_config.setAttribute("disabled",true);
		}
		
		if(!/^(0|([1-9]+[0-9]*))(.[0-9]+)?$/.test(myvalue)){
			pass_prompt.innerHTML="请输入密码,不能全为数字、字母";
		}
		
		if(myvalue.length>5){										//字符个数大于5显示密码强度为中
			pass_middle.style.background="#C00";	
		}else{
			pass_middle.style.background="#F60";	
		}
		
		if(myvalue.length>10){									//字符个数大于5显示密码强度为强
			pass_hard.style.background="#C00"
		}else{
			pass_hard.style.background="#F60"			
		}	
	}
	password_input.onblur=function(){
		var myvalue= password_input.value;
		var difNum=diffient(myvalue,myvalue.charAt(0));
		if(difNum==myvalue.length){
			pass_prompt.innerHTML="您输入的数字全都相同，请重设密码";          //密码不能相同
		}else
		if(!/[^\d]/g.test(myvalue)){
			pass_prompt.innerHTML="不能全为数字";
		}else
		if(!/[^a-zA-Z]/g.test(myvalue)){
			pass_prompt.innerHTML="不能全为字母";
		}else 
		if(myvalue.length<5||myvalue.length>15){
			pass_prompt.innerHTML="请输入5-10个字符";
		}else{
			pass_prompt.innerHTML="验证成功";	
		}
		
	}
	

	
	
	function getCharacter(val){													//定义一个方法，让中文字符占两个字符串大小
		return val.replace(/[\u4e00-\u9fa5]/g,"xx").length;
	
	}
	
	
	function diffient(char,firtC){
		var temp=0;
		for(var i=0;i<char.length;i++){
			if(char.charAt(i)==firtC){
				temp++;
			}
		}
		return temp;
	}


	
	
	var str="rewer"
	var c=/[\u4e00-\u9fa5]/;
	
	
	/[\u4e00-\u9fa5]/
	var c="94039419@163.com"
	
	function returnRegString(regName) {  
		if (regName == "email") {  
			return "^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$";  //邮箱  
		} else if (regName == "tel") {  
			return "^(86)?(-)?(0[0-9]{2,3})?(-)?([0-9]{7,8})(-)?([0-9]{3,5})?$";  //电话  
		} else if (regName == "phone") {  
			return "^(13[0-9]|15[0-9]|18[0-9])([0-9]{8})$";  //手机  
		} else if (regName == "postcode") {  
			return "^([0-9]{6})$";    //邮编  
		} else if (regName == "number") {  
			return "^(0|([1-9]+[0-9]*))(.[0-9]+)?$";   //数字  
		} else if (regName == "decimal") {  
			return "^[0-9]+([.][0-9]+)?$";    //浮点  
		} else if (regName == "money") {  
			return "^([0-9])$";    //货币  
		} else if (regName == "website") {  //网址  
			return "(http://|https://){0,1}[\w\/\.\?\&\=]+";  
		} else if (regName == "fax") {  //传真  
			return "^[+]{0,1}([0-9]){1,3}[ ]?([-]?(([0-9])|[ ]){1,12})+$";  
		} else if (regName == "int") {   //整数  
			return "^(-){0,1}\d+$";  
		} else if (regName == "pInt") {   //正整数  
			return "^\d+$";  
		} else if (regName == "nInt") {  //负整数  
			return "^-\d+$";  
		} else if (regName == "nandl") {   //数字与字母  
			return "[a-zA-Z0-9]";  
		} else if (regName == "chinese") {   //是否含有中文字符  
			return "[\u4e00-\u9fa5]";  
		}  
	}  

}