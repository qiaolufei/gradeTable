//搜索出的成绩的删除
$(document).ready(function() {
	$("#delete").click(function() {
		var id = $("#a_stuId").val();
		$.ajax({
			type: "post",
			url: "http://localhost:8080/GradeTable/deleteGrade",
			data: {
				id: id,
			},
			async: true,
			success: function(msg) {
				var i = "true";
				if(msg.trim() == i.trim()) {
					alert("删除成功！");
					location.reload();
				} else {
					alert("删除失败！");
				}
			},
			error: function(e) {
				console.log(e);
			}
		});
	})
})

//表格里的删除按钮功能
function deleteOne(id) {
	var id = id;
	$.ajax({
		type: "post",
		url: "http://localhost:8080/GradeTable/deleteGrade",
		data: {
			id: id,
		},
		async: true,
		success: function(msg) {
			var a = "true";
			if(msg.trim() == a.trim()) {
				alert("删除成功！");
				location.reload();
			} else {
				alert("删除失败！");
			}
		},
		error: function(e) {
			alert(e);
		}
	});
}