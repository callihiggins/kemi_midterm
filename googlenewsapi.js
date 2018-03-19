// JavaScript Document

var app = {
	gnewsApiData : [],
	
	gnewsApiLink: 'https://newsapi.org/v2/everything/',

	initialize: function() {
		app.getgnewsApiData();
	},

	getgnewsApiData: function() {
		console.log("Getting gnewsApi Data");
		var searchTerm = 'boko%20haram';
		var language='en';
		var startTime='2018-03-17';
		var endTime='2018-03-25';
		var sortedBy='popularity';
		var gnewsApiURL = 'https://newsapi.org/v2/everything?q='+ searchTerm +'&language='+ language +'&from='+ startTime + '&to='+ endTime +'&sortBy='+ sortedBy +'&apiKey=';
		var mygnewsApiAPIKey = "0a35e5dd16a541678f6c27471fafcee6";
		var gnewsApiReqURL = gnewsApiURL + mygnewsApiAPIKey;

		$.ajax({
			url: gnewsApiReqURL,
			type: 'GET',
			dataType: 'json',
			 
			error: function(err){
				console.log(err);
			},
			success: function(data){
				console.log("Got the data");
				app.gnewsApiData = data.items;
				app.makeHTML();
				
			}
		});
	},
			//Clear out the container
	makeHTML: function() {
		var theHTML = '';
		for (var i = 0; i < app.getgnewsApiData.length; i++){
			theHTML += "<div class='text-article-box'>";
			theHTML += "<headline>" + app.gnewsApiData[i].articles.title + "</headline>";
			theHTML += "<summary>" + app.gnewsApiData[i].articles.description + "</summary>";
			theHTML += "<author>"  + app.gnewsApiData[i].articles.source.author + "</headline>";
			theHTML += "<source>" + app.gnewsApiData[i].articles.source.name + "</source>";
			theHTML += "<time>" + app.gnewsApiData[i].articles.publishedAt + "</time>";
			theHTML += "<url>" + app.gnewsApiData[i].articles.url + "</url>";
	
			theHTML += "</div>";
		}
		
		$('.article-news-container').html(theHTML)	;
	},
};