$(document).ready(function() {
	$("#resigter").click(function() {
		//验证
		var id = $("#new_userID").val();
		var pwd1 = $('#new_pwd1').val();
		var pwd2 = $('#new_pwd2').val();
		if(pwd1 != pwd2 || pwd1==""|| pwd2=="") {
			alert("两次密码不一致！");
		} else if(id == "") {
			alert("请设置您的用户名！");
		} else {
			$.ajax({
				type: "post",
				url: "http://localhost:8080/GradeTable/addUser",
				data: {
					id: id,
					pwd: pwd2,
				},
				async: true,
				success(msg) {
					var i = "true";
					if(msg.trim() == i.trim()) {
					alert("注册成功，请登录");
					$("#new_userID").val("");
					$('#new_pwd1').val("");
					$('#new_pwd2').val("");}
					else{
						alert("该用户名已被注册，请重新设置!");
					}
				},
				error: function(e) {
					console.log(e);
				}
			})
		}
	})
})