var app = {
	youTubeData : [],
	
	youTubeLink: 'https://youtube.com/embed/',

	initialize: function() {
    console.log('you tube');
		app.getYouTubeData();
	},

	getYouTubeData: function() {
		console.log("Getting YouTube Data");
		var searchTerm = 'boko%20haram';
		var YouTubeURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+ searchTerm +'&type=video&key=';
		var myYouTubeAPIKey = "AIzaSyBgkq8aZGcL4lX67SY_ngQ7UTVTTJIxp7Q";
		var YouTubeReqURL = YouTubeURL + myYouTubeAPIKey;

		$.ajax({
			url: YouTubeReqURL,
			type: 'GET',
			dataType: 'json',
			error: function(err){
				console.log(err);
			},
			success: function(data){
				console.log("Got the data");
				app.youTubeData = data.items;
				app.makeHTML();
			}
		});
	},
			//Clear out the container
	makeHTML: function() {
		var theHTML = '';
		for (var i = 0; i < app.youTubeData.length; i++){
			theHTML += "<div class='video-article-box'>";
			theHTML += "<h3>" + app.youTubeData[i].snippet.title + "</h3>";
			theHTML += "<iframe src= "+ app.youTubeLink + app.youTubeData[i].id.videoId + "/>";
			theHTML += "</div>";
		}
		$('.video-news-container').html(theHTML);
	},
};
	//https://www.googleapis.com/youtube/v3/search?part=snippet&q' + searchTerm //+'&type=video&key="AIzaSyBgkq8aZGcL4lX67SY_ngQ7UTVTTJIxp7Q"
	//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=boko+haram&type=video&key=AIzaSyBgkq8aZGcL4lX67SY_ngQ7UTVTTJIxp7Q
	
	//twitter scriot that runs with php oauth proxy
	/*$(function(){
    $.ajax({
        url: 'get_tweets.php',
        type: 'GET',
   
        success: function(response) {
            if (typeof response.errors === 'undefined' || response.errors.length < 1) {
                var $tweets = $('<ul></ul>');
                $.each(response, function(i, obj) {
                    $tweets.append('<li>' + obj.text + '</li>');
                });
                $('.tweets-container').html($tweets);
            } else {
                $('.tweets-container p:first').text('Response error');
            }
        },
        error: function(errors) {
            $('.tweets-container p:first').text('Request error');
        }
    });
}); */