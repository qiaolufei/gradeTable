$(document).ready(function() {
	$("#login").click(function() {
		var id = $("#userID").val();
		var pwd = $("#userPwd").val();
		if(pwd == "" || id == "") {
			alert("请输入您的用户名或密码！");
		} else {
			$.ajax({
				type: "post",
				url: "http://localhost:8080/GradeTable/login",
				async: true,
				data: {
					id: id,
					pwd: pwd,
				},
				success: function(msg) {
					console.log(msg);
					var i = "false";
					if(msg.trim() == i.trim()) {
						alert("用户名或密码错误，请重新输入！");
					} else {
						self.location = 'index.html';
					};
				},
				error: function(e) {
					console.log(e);
				}
			});
		}
	})
})