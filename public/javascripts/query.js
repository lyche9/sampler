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
			$.each(data, function (i, value) {
				$(".result").append("<a href = \""
          + "https://www.youtube.com/watch?v="
          + data[i].id
          + "\"><img class=\"thumb\" src=\""
          + data[i].thumbnail.medium.url +"\"</img>");
			});
		}
	});
}
