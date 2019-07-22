//获取管理员名称
function getUser() {
	$.ajax({
		type: "post",
		url: "http://localhost:8080/GradeTable/getUser",
		async: true,
		success: function(msg) {
			//console.log("hh:" + msg);
			var a = "noUser";
			if(msg.trim() != a.trim()) {
				$("#user").html(msg);
			} else {
				alert("请先登录！");
				self.location = "login.html";
			}
		},
		error: function(e) {
			console.log(e);
		}
	});
}
getUser();
//注销登录
$(document).ready(function() {
	$('#cancell').click(function() {
		$.ajax({
			type: "post",
			url: "http://localhost:8080/GradeTable/cancellation",
			async: true,
			success: function(msg) {
				var i = "success";
				if(msg.trim() == i.trim()) {
					alert("谢谢使用，欢迎下次再来！");
					self.location = "login.html";
				}
			},
			error: function(e) {
				console.log(e.status);
			}

		});
	})
})