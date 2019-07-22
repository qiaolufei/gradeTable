function allG() {
	var id = 1;
	$.ajax({
		type: "post",
		url: "http://localhost:8080/GradeTable/GradeInfo",
		async: true,
		success: function(Result) {
			//console.log(Result);
			var grade = eval(Result);
			//console.log(grade);
			var output = '';
			var i = 0;
			$.each(grade, function(i) {
				var Java = grade[i].Java;
				var OOP = grade[i].OOP;
				var Web = grade[i].Web;
				var sum = Java * 1 + OOP * 1 + Web * 1;
				var aver = sum / 3;
				var le;
				//等级
				if(0 <= aver && aver <= 59) {
					le = "D";
				} else if(60 <= aver && aver <= 79) {
					le = "C";
				} else if(80 <= aver && aver <= 89) {
					le = "B";
				} else {
					le = "A";
				};
				output +=
					'<tr>' +
					'<td>' + grade[i].id + '</td>' +
					'<td>' + grade[i].name + '</td>' +
					'<td>' + grade[i].Java + '</td>' +
					'<td>' + grade[i].OOP + '</td>' +
					'<td>' + grade[i].Web + '</td>' +
					'</td><td>' + aver.toFixed(1) + '</td>' +
					'</td><td>' + le + '</td>' +
					'<td><button class="btn btn-default" data-toggle="modal" data-target="#searchGrade" onclick="editOne(' + grade[i].id + ')">编辑</button> <button class="btn btn-default" onclick="deleteOne(' + grade[i].id + ')">删除</button></td>' +
					'</tr>';
				$('#num').val(id);
				id++;
			});
			var end = $("#end"); // 指定的ID 可循环表格得到
			$(output).insertBefore(end);

		},
		error: function(e) {
			console.log(e);
		}
	});
}
allG();