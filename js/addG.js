$(document).ready(function() {
	$("#addG").click(function() {
		var stuId = $("#new_stuId").val();
		var name = $("#new_name").val();
		var Java = $("#new_Java").val();
		var Web = $("#new_Web").val();
		var OOP = $("#new_OOP").val();
		var reg = /^(([^0][\d]?)|0|100)$/;
		if(stuId == "" || name == "") {
			alert("请输入学号或姓名！");
		} else if(reg.test(Java) == false) {
			alert("Java处请输入0-100的整数！");
		} else if(reg.test(Web) == false) {
			alert("Web处请输入0-100的整数！");
		} else if(reg.test(OOP) == false) {
			alert("OOP处请输入0-100的整数！");
		} else {
			$.ajax({
				type: "post",
				url: "http://localhost:8080/GradeTable/addGrade",
				data: {
					id: stuId,
					name: name,
					Java: Java,
					Web: Web,
					OOP: OOP,
				},
				async: true,
				success: function(msg) {
					var i = "true";
					if(msg.trim() == i.trim()) {
						alert("添加成功！");
						//清空输入框
						$("#new_stuId").val("");
						$("#new_name").val("");
						$("#new_Java").val("");
						$("#new_Web").val("");
						$("#new_OOP").val("");
						location.reload();
					} else {
						alert("该学号已经添加，请重新输入！");
					}
				},
				error: function(e) {
					console.log(e);
				}
			});
		}
	})
})