$(document).ready(function(){
	$("#searchG").click(function(){
		var idName = $("#id-name").val();
		if(idName == ""){
			alert("搜索框不能为空！");
			location.reload();
		}
		else{
			$.ajax({
				type:"post",
				url:"http://localhost:8080/GradeTable/searchGrade",
				data:{in : idName},
				async: true,
				success: function(Result){
				//console.log(Result);
				var grade = eval(Result);
				if(grade.length != 0) {
				$("#a_stuId").val(grade[0].id);
				$("#a_name").val(grade[0].name);
				$("#a_Java").val(grade[0].Java);
				$("#a_Web").val(grade[0].Web);
				$("#a_OOP").val(grade[0].OOP);
				
				}else{
					
					alert("无此学生成绩信息！");
					location.reload();
				}
				},
				error: function(e){console.log(e);},
			});
		}
	})
})