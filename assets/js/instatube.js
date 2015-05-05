
$(document).ready(function()
{
//MACRO for number of results
var resultsVarTotal = 9;

//To compensate for the devicesupport video
var resultsVar = resultsVarTotal + 1;
 //var searchBox = $("#search_input);
$("#search_input").focus();
$("#search_input").keyup(function() 
{

 $("#video").html('');
var search_input = $(this).val();
var keyword= encodeURIComponent(search_input);
var yt_url='http://gdata.youtube.com/feeds/api/videos?q='+keyword+'&format=5&max-results='+resultsVar+'&v=2&alt=jsonc'; 
$.ajax({
type: "GET",
url: yt_url,
dataType:"jsonp",
success: function(response)
{
if(response.data.items)
{
$.each(response.data.items, function(i,data)
{
var video_id=data.id;
var video_title=data.title;
var video_viewCount=data.viewCount;
//To avoid the device support  videos
 if(video_id!='UKY3scPIMd8'){
 //iframe - youtube videos
var video_frame="<iframe width='340' height='250' src='http://www.youtube.com/embed/"+video_id+"' frameborder='0' type='text/html'></iframe>";
var final="<div id='result'  ><div>"+video_frame+"</div></div>";
 }
$("#video").append(final);
});
}
else
{
	$("#video").html("<div id='no'>No Video</div>");
}
} 
});
});
});
 

 
