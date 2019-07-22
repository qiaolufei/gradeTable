//搜索出的成绩的修改
$(document).ready(function() {
	$("#edit").click(function() {
		var id = $("#a_stuId").val();
		var name = $("#a_name").val();
		var Java = $("#a_Java").val();
		var Web = $("#a_Web").val();
		var OOP = $("#a_OOP").val();
		$.ajax({
			type: "post",
			url: "http://localhost:8080/GradeTable/editGrade",
			data: {
				id: id,
				name: name,
				Java: Java,
				Web: Web,
				OOP: OOP,
			},
			async: true,
			success: function(msg) {
				var i = "true";
				if(msg.trim() == i.trim()) {
					alert("修改成功！");
					location.reload();
				} else {
					alert("修改失败！");
				}
			},
			error: function(e) {
				console.log(e);
			}
		});
	})
})

//表格里的编辑功能
function editOne(id) {
	var id = id;
	$.ajax({
		type: "post",
		url: "http://localhost:8080/GradeTable/searchGrade",
		data: { in: id
		},
		async: true,
		success: function(Result) {
			var grade = eval(Result);
			$("#a_stuId").val(grade[0].id);
			$("#a_name").val(grade[0].name);
			$("#a_Java").val(grade[0].Java);
			$("#a_Web").val(grade[0].Web);
			$("#a_OOP").val(grade[0].OOP);
		},
		error: function(e) {
			console.log(e);
		},
	});
}