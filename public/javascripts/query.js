$( document ).ready(function() {
    query();
});

function query() {
	$.ajax({
		url : "/",
		type: "POST",
    data: {q : $("#sampleQuery").val()},
		success: function(data) {
			$(".result").empty();
			console.log(data);
			$.each(data, function (index, value) {
				$(".result").append("<br>" + data[index] );
			});
		}
	});
}
