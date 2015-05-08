
$(document).ready(function()
{
//MACRO for number of results
var resultsVarTotal = 20;

//To compensate for any un-supported form of videos in future
var resultsVar = resultsVarTotal ;
 
$("#search_input").keyup(function(){

 $("#video").html('');
var search_input = $(this).val();

var keyword= encodeURIComponent(search_input);

//Request url - [Youtube Data API-> version 3-> Reference-> Search:List]
var yt_url='https://www.googleapis.com/youtube/v3/search?part=snippet&q='+keyword+'&maxResults='+resultsVar+'&key=AIzaSyDMV-vxpsJDQ-hb8B5nQLC54VUS8n4kYpM';


$.ajax({
type: "GET",
url: yt_url,
dataType:"jsonp",
success: function(response)
{

if(response.items){

$.each( response.items, function(i,data)
{
var video_id=data.id.videoId;
var video_frame="<iframe width='255' height='150' src='http://www.youtube.com/embed/"+video_id+"' frameborder='0' type='text/html'></iframe>";
var final="<div><div id='result' class='result'>"+video_frame+"</div></div>";
$("#video").append(final); 
}); //.each
} //response.data.item
else
{
	$("#video").html("<div id='no'>No Video</div>");
}

} 
});
 
}); //keyup

});
 

 
